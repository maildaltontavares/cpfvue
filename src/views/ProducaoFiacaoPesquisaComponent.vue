<template>
    
    <div>  
           <div class="principal cinzaClaro">
               <p class="card-header text-center" style="font-size: 30px; margin-bottom: 50px; margin-top: 2%;color: blue; font-weight: bold;">Produção Fiação</p>
           </div>    
   </div>    
    

     <div class="flex-linha backPesquisa" style="justify-content: center;width:100%; padding: 10px;"> 
        
        <div class="row    "  style="width:230px;margin-bottom: 5px;margin-right:2%"   > 
            <div class=" text-start">                                         
                <label for="dataProducao" class="col-form-label label_cabecalho">Data Produção Inicial</label>              
                <input type="Date"
                    id="dataProducao"
                    class="form-control form-control-sm  text-center  padraoCombo"
                    style="margin:0px;width:180px"                                                                     
                    ref="dataInicial"
                    v-model="this.producaoFiacaoParams.dataProducaoInicial" 
                    
                >  
            </div>
        </div>   

        <div class="row   "  style="width:230px;margin-bottom: 5px;margin-right:2%"    > 
            <div class=" text-start">                
                <label for="dataProducao" class="col-form-label label_cabecalho">Data Produção Final</label>              
                <input type="Date"
                    id="dataProducao"
                    class="form-control form-control-sm  text-center padraoCombo "
                    style="margin:0px;width:180px"   
                    v-model="this.producaoFiacaoParams.dataProducaoFinal"                                                                  
                
                    
                > 
          </div> 
        </div>         

        <div class="row  "   style="margin-right:50px;" >  
            <div class=" text-start">
                <label for="tpMaquina" class="col-form-label  label_cabecalho">Tipo de Maquina</label>
                <select class="form-select padraoCombo form-control form-control-sm  "  
                v-model="this.producaoFiacaoParams.tipoMaquina" 
                :disabled="tpMaquinaDesabilitado"           >
                    <option value="" disabled>Selecione o tipo de maquina</option>
                    <option v-for="t in  tipoMaquina" :key="t.codigo" :value="t.codigo"> {{ t.nome }}</option>       
                            
                </select> 
            </div> 
        </div>   
 


        <div class="row    "  style="width:230px;margin-bottom: 5px;margin-right:2%"   > 
            <div class=" text-start">                                         
                <label for="maquina" class="col-form-label label_cabecalho">Máquina</label>              
                <input type="text"
                    id="maquina"
                    class="form-control form-control-sm  text-center  padraoCombo"
                    style="margin:0px;width:180px"                                                                     
                    ref="maquina"
                    maxlength="6" 
                    
                    v-model.lazy="this.producaoFiacaoParams.codigoMaquina" 
                    
                >  
            </div>
        </div>    


        <div class="row  "   style="margin-right:55px;" >  
            <div class=" text-start">
                <label for="turno" class="col-form-label  label_cabecalho">Turno</label>
                <select class="form-select padraoCombo form-control form-control-sm  "  
                v-model="this.producaoFiacaoParams.turno"
                        >
                    <option value="" disabled>Selecione o turno</option>
                    <option v-for="t in turno" :key="t.codigo" :value="t.codigo"> {{ t.codigo }}</option>       
                            
                </select> 
            </div> 
        </div>      
        
 

        <div class="row  "   style="margin-right:25px;" >  
                
            <button type="button" class="btn btn-primary"
            style="margin-top: 25px; height:53px;width:145px;"
            @click="pesquisaDados"
            >
            <i class="bi bi-search input-group-append"  >   Pesquisar</i>
        </button>                
            
        </div>   


    </div>
     


   <div class="container-fluid  " style="margin-left: 0px;">
     <table class="table table-sm table-striped tabela"  >
       <thead  style="background-color:#003366;color: white; ">
           <tr  >
               <th class="col-1 text-start">LF</th>
               <th class="col-1 text-start">MAQ</th>
               <th class="col-1 text-start">DATA PROD</th>
               <th class="col-1 text-start">T</th>
               <th class="col-1 text-start">HR INI</th>
               <th class="col-1 text-start">HR FIM</th>
               <th class="col-1 text-start">L</th>
               <th class="col-1 text-start">OPER</th> 
              
                
           </tr>
       </thead> 
 
       <tbody>
            <template v-if="apiDisplayedDadosCRUD">
         
                <tr v-for="(i,indice) in apiDisplayedDadosCRUD" :key="indice">  
                
                        <td class="col-2 text-start">
                            {{ i.localFisico }}
                    </td>   

                    <td class="col-2 text-start">
                        {{ i.codigoMaquina }}
                    </td> 
            
                    <td class="col-2 text-start">
                            {{ i.dataProducao }}
                    </td>

                    <td class="col-2 text-start">
                        {{ i.turno }}
                    </td>  

                    <td class="col-2 text-start">
                            {{ i.horaInicio   }}
                    </td>

                    <td class="col-2 text-start">
                        {{ i.horaFinal}}
                    </td>  

                    <td class="col-2 text-start">
                        {{ i.lado}}
                    </td>   
            
                    <template  v-if="this.tipoMaquinaProps=='99'">
                        <th class="col-2">
                            <router-link :to="{ name: 'acessoproducao' , 
                            params : { maquinaProps : i.codigoMaquina ,dataProducaoProps : i.dataProducao,turnoProps :  i.turno, ladoProps : i.lado, horaInicialProps : i.horaInicio ,localFisicoProps : i.localFisico ,
                            operacao : 'A', tipoMaquinaProps : '99'} }">                                        
                                <img src="@/assets/icon_editar.gif" alt="Editar" class="botao EspacoEntreBotoes" height="30">
                            </router-link>  

                            <!--
                            <router-link :to="{ name: 'acessoproducao' , 
                            params : { maquinaProps : i.codigoMaquina ,dataProducaoProps : i.dataProducao,turnoProps :  i.turno, ladoProps : i.lado, horaInicialProps : i.horaInicio  ,localFisicoProps : i.localFisico ,
                            operacao : 'E', tipoMaquinaProps : '99'} }">                                        
                                <img src="@/assets/icon_deletar.gif" alt="Excluir" class="botao EspacoEntreBotoes">
                            </router-link>  
                        -->
                            
                        </th> 
                    </template>   
                    
                    
                    <template  v-if="this.tipoMaquinaProps=='02'">
                        <th class="col-2">
                            <router-link :to="{ name: 'acessocardas' , 
                            params : { maquinaProps : i.codigoMaquina ,dataProducaoProps : i.dataProducao,turnoProps :  i.turno, ladoProps : i.lado, horaInicialProps : i.horaInicio ,localFisicoProps : i.localFisico ,
                            operacao : 'A', tipoMaquinaProps : '02'} }">                                        
                                <img src="@/assets/icon_editar.gif" alt="Editar" class="botao EspacoEntreBotoes" height="30">
                            </router-link>  

                          <!--
                            <router-link :to="{ name: 'acessocardas' , 
                            params : { maquinaProps : i.codigoMaquina ,dataProducaoProps : i.dataProducao,turnoProps :  i.turno, ladoProps : i.lado, horaInicialProps : i.horaInicio  ,localFisicoProps : i.localFisico ,
                            operacao : 'E', tipoMaquinaProps : '02'} }">                                        
                                <img src="@/assets/icon_deletar.gif" alt="Excluir" class="botao EspacoEntreBotoes">
                            </router-link>  
                         -->     
                        </th> 
                    </template> 

                    <template  v-if="this.tipoMaquinaProps=='03'">
                        <th class="col-2">
                            <router-link :to="{ name: 'acessopassador' , 
                            params : { maquinaProps : i.codigoMaquina ,dataProducaoProps : i.dataProducao,turnoProps :  i.turno, ladoProps : i.lado, horaInicialProps : i.horaInicio ,localFisicoProps : i.localFisico ,
                            operacao : 'A', tipoMaquinaProps : '03'} }">                                        
                                <img src="@/assets/icon_editar.gif" alt="Editar" class="botao EspacoEntreBotoes" height="30">
                            </router-link>  

                            <!--
                            <router-link :to="{ name: 'acessopassador' , 
                            params : { maquinaProps : i.codigoMaquina ,dataProducaoProps : i.dataProducao,turnoProps :  i.turno, ladoProps : i.lado, horaInicialProps : i.horaInicio  ,localFisicoProps : i.localFisico ,
                            operacao : 'E', tipoMaquinaProps : '03'} }">                                        
                                <img src="@/assets/icon_deletar.gif" alt="Excluir" class="botao EspacoEntreBotoes">
                            </router-link>  
                        -->
                        </th> 
                    </template> 


                    <template  v-if="this.tipoMaquinaProps=='04'">
                        <th class="col-2">
                            <router-link :to="{ name: 'acessoOE' , 
                            params : { maquinaProps : i.codigoMaquina ,dataProducaoProps : i.dataProducao,turnoProps :  i.turno, ladoProps : i.lado, horaInicialProps : i.horaInicio ,localFisicoProps : i.localFisico ,
                            operacao : 'A', tipoMaquinaProps : '04'} }">                                        
                                <img src="@/assets/icon_editar.gif" alt="Editar" class="botao EspacoEntreBotoes" height="30">
                            </router-link>  

                            <!--
                            <router-link :to="{ name: 'acessoOE' , 
                            params : { maquinaProps : i.codigoMaquina ,dataProducaoProps : i.dataProducao,turnoProps :  i.turno, ladoProps : i.lado, horaInicialProps : i.horaInicio  ,localFisicoProps : i.localFisico ,
                            operacao : 'E', tipoMaquinaProps : '04'} }">                                        
                                <img src="@/assets/icon_deletar.gif" alt="Excluir" class="botao EspacoEntreBotoes">
                            </router-link>  
                        -->
                        </th> 
                    </template> 

                    <template  v-if="this.tipoMaquinaProps=='05'">
                        <th class="col-2">
                            <router-link :to="{ name: 'acessomacaroqueira' , 
                            params : { maquinaProps : i.codigoMaquina ,dataProducaoProps : i.dataProducao,turnoProps :  i.turno, ladoProps : i.lado, horaInicialProps : i.horaInicio ,localFisicoProps : i.localFisico ,
                            operacao : 'A', tipoMaquinaProps : '05'} }">                                        
                                <img src="@/assets/icon_editar.gif" alt="Editar" class="botao EspacoEntreBotoes" height="30">
                            </router-link>  

                           <!-- 
                            <router-link :to="{ name: 'acessomacaroqueira' , 
                            params : { maquinaProps : i.codigoMaquina ,dataProducaoProps : i.dataProducao,turnoProps :  i.turno, ladoProps : i.lado, horaInicialProps : i.horaInicio  ,localFisicoProps : i.localFisico ,
                            operacao : 'E', tipoMaquinaProps : '05'} }">                                        
                                <img src="@/assets/icon_deletar.gif" alt="Excluir" class="botao EspacoEntreBotoes">
                            </router-link>  
                        -->
                        </th> 
                    </template> 



                    <template  v-if="this.tipoMaquinaProps=='06'">
                        <th class="col-2">
                            <router-link :to="{ name: 'acessoconicaleira' , 
                            params : { maquinaProps : i.codigoMaquina ,dataProducaoProps : i.dataProducao,turnoProps :  i.turno, ladoProps : i.lado, horaInicialProps : i.horaInicio ,localFisicoProps : i.localFisico ,
                            operacao : 'A', tipoMaquinaProps : '06'} }">                                        
                                <img src="@/assets/icon_editar.gif" alt="Editar" class="botao EspacoEntreBotoes" height="30">
                            </router-link>  

                           <!-- 
                            <router-link :to="{ name: 'acessoconicaleira' , 
                            params : { maquinaProps : i.codigoMaquina ,dataProducaoProps : i.dataProducao,turnoProps :  i.turno, ladoProps : i.lado, horaInicialProps : i.horaInicio  ,localFisicoProps : i.localFisico ,
                            operacao : 'E', tipoMaquinaProps : '06'} }">                                        
                                <img src="@/assets/icon_deletar.gif" alt="Excluir" class="botao EspacoEntreBotoes">
                            </router-link>  
                        -->
                        </th> 
                    </template> 




                    

                    

                    
                </tr>
          </template> 

       </tbody> 
        
    
    </table> 

     
   </div>

   <div class="mt-4" v-if="exibePaginador">
               <nav aria-label="Page navigation example">
                 <ul class="pagination pagination-sm justify-content-center">
                   <li class="page-item">
                     <button type="button" class="page-link" v-if="page != 1" @click="page--"> Anterior </button>
                   </li>
                   <li class="page-item" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber">
                     <button type="button" class="page-link" @click="page = pageNumber"> {{pageNumber}} </button>
                   </li>
                   <li class="page-item">
                     <button type="button" class="page-link" v-if="page < pages.length" @click="page++"> Próxima </button>
                   </li>
                 </ul>
               </nav>
   </div> 

   <div style="height:80px">   <!--   Libera espaco da barra de botoes no mobile-->
 
   </div>

   <div class="row msg_rodape" v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo== 'mobile'" style="margin-bottom:50px" >

        <div class="col-12">
            <p v-if="haErros" class="mensagem mensagem_erro">
                {{ mensagemErro }}
            </p>
            <p v-if="haSucesso" class="mensagem mensagem_sucesso">
                {{ mensagemSucesso }}
            </p>
        </div>


    </div>  



   <div class="row rodape">

        <div class="col-9"> 

            <p v-if="msgProcessamento != ''" class=" mensagem mensagem_processando" style="font-size: 16px;">
                {{ msgProcessamento }}
            </p>  
    
            <p v-if="haErros && this.$store.state.tipoDispositivo == 'desktop'" class="mensagem mensagem_erro">
                {{ mensagemErro }}
            </p>
            <p v-if="haSucesso && this.$store.state.tipoDispositivo == 'desktop'"  class="mensagem mensagem_sucesso">
                {{ mensagemSucesso }}
            </p>
            

        </div> 

        <div class="col-3 div_rodape d-flex justify-content-end">
            <button type="button"  class="btn btn-sm btn-primary ms-2 me" style="width:150px;min-width: 150px;" @click="resetaCampos" accesskey="l"><u>L</u>impar pesquisa</button>
            <button type="button" class="btn btn-sm btn-primary ms-2 me" accesskey="n" @click="NavegarParaInclusao"> <u>N</u>ovo </button>  
        </div> 

  </div>     

          
    
   
    
    
</template>

<script> 

import ApiMixin from '@/mixins/ApiMixin' 
 import { mapState } from 'vuex'
 export default {
        
        name: 'ProducaoFiacaoPesquisaComponent',
        mixins: [ApiMixin],


        props: {
             
            tipoMaquinaProps: {
            type : String,
            required: true,
            },            
        },  

        
        data: () => ({ 
            erros: '',
            mensagemSucesso: '',
            mensagemErro : '', 
            haErros: false,      
            haSucesso: false,    
            exibePaginador:false,        
            resultPesquisaCRUD : [] ,
            resultadoPesquisa:[],
            producaoFiacaoDao:[], 
            producaoFiacaoParams: { 
                idfil:""   ,
                dataProducaoInicial:"",
                dataProducaoFinal:"",
                tipoMaquina:"",
                codigoMaquina:"",
                turno:"",
                reset:false 

            },            
            tipoMaquina: [], 
            tipoMaquinaTemp: {    
                 codigo:'' ,
                 nome:  '' , 
            }, 

            tpMaquinaDesabilitado:'',
            
            turno: [
                { "codigo": "A"},
                { "codigo": "B"},
                { "codigo": "C"}              
                ]
        
        }),
        computed: mapState(['usuarioSistema']),
        methods: { 
            NavegarParaInclusao( ){ 
            this.$router.push({name:'producaofiacao' , params : {maquinaProps :' ' ,dataProducaoProps : ' ' ,turnoProps : ' ' , ladoProps : ' ' , horaInicialProps :' ' ,localFisicoProps :' ', operacao : 'I'}} ) 
            },
            setaPesquisaCRUD(pCursor) {  
                this.resultPesquisaCRUD = pCursor   

            } ,
            resetaCampos() {  

                //console.log('Resetar');
                this.producaoFiacaoParams.idfil = this.$store.state.usuarioSistema.idfil; 
                this.producaoFiacaoParams.turno="";
                this.producaoFiacaoParams.codigoMaquina="";
                this.producaoFiacaoParams.dataProducaoInicial="";
                this.producaoFiacaoParams.dataProducaoFinal="";  

                this.resultPesquisaCRUD = [];
                this.exibePaginador = false;
                
                //this.populaForm();               

            }  ,   
            
        pesquisaDados(){    

            //console.log('pesquisaDados')
            //console.log(this.producaoFiacaoParams )

            let periodoPreenchido = true;  

            if (this.producaoFiacaoParams.dataProducaoInicial == null || this.producaoFiacaoParams.dataProducaoInicial == ""){
                //this.haErros = true;
                //this.mensagemErro = "Informe a data inicial  " + this.producaoFiacaoParams.dataProducaoInicial ; 
                
                this.apiDisplayMensagem("Informe a data inicial  " + this.producaoFiacaoParams.dataProducaoInicial );
                //console.log("Informe a data inicial")  ;
                periodoPreenchido  = false;
             }   

            //console.log('periodoPreenchido 2')
            //console.log(periodoPreenchido)               
             
             if ((this.producaoFiacaoParams.dataProducaoFinal == null || this.producaoFiacaoParams.dataProducaoFinal == "") && periodoPreenchido ){
                //this.haErros = true;
                //this.mensagemErro = "Informe a data final"  ;
                //console.log("Informe a data final")  ;
                this.apiDisplayMensagem("Informe a data final");
                periodoPreenchido  = false;                                      
             }    

            //console.log('periodoPreenchido 3')
            //console.log(periodoPreenchido)               
       

            if(periodoPreenchido) {
                this.haErros = false
                this.exibePaginador = true;
                this.apiPesquisaCRUDByFilial('producao','nome',  this.producaoFiacaoParams )
            }
            
        },

        navegarParaLogin(){this.$router.push({name:'login'  })}   
        } , 

        created(){    

            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            } 
            
            this.producaoFiacaoParams.idfil = this.$store.state.usuarioSistema.idfil;
            this.populaTipoMaquina();
            this.resetaCampos(); 

       }, 
        
        mounted(){ 
            this.$refs.dataInicial.focus();
            this.resetaCampos();  
            
            if(this.tipoMaquinaProps!="99"){
                this.producaoFiacaoParams.tipoMaquina = this.tipoMaquinaProps; 
                this.tpMaquinaDesabilitado = true;
                
            }else{
                this.tpMaquinaDesabilitado = false;
            }           

            
            
                    
               
        } 
 
 }
   </script>

<style scoped>

.botaoPesquisa {
     background-image:url("@/assets/icon_pesquisa.gif");
     
 
}

.backPesquisa{
    background-color: lightgrey ;
}

 .tituloPesquisa {
   font-size: 10px;
 }

 .cabecalhoPesquisa {
   font-size: 12px;
   color: white;
   font-weight: bold;
   background-color: #003366;
   border-radius: 5px;
 }
 .detalhePesquisa {
   font-size: 12px;
   height: 300px;
 }
 
 


</style>

 
 