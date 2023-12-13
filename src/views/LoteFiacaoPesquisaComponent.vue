<template>
    
    <div>  
           <div class="principal cinzaClaro">
               <p class="card-header text-center" style="font-size: 30px; margin-bottom: 80px; margin-top: 2%;color: blue; font-weight: bold;">Pesquisa Lote Fiação</p>
           </div>    
   </div>    
    

     <div class="flex-linha backPesquisa" style="justify-content: center;width:100%; padding: 10px;"> 
        
        <div class="row    "  style="width:230px;margin-bottom: 5px;margin-right:2%"   > 
            <div class=" text-start">                                         
                <label for="dataLoteInicial" class="col-form-label label_cabecalho">Data Cadastro Inicial</label>              
                <input type="Date"
                    id="dataLoteInicial"
                    class="form-control form-control-sm  text-center  padraoCombo"
                    style="margin:0px;width:180px"                                                                     
                    ref="dataLoteInicial"
                    v-model="this.loteFiacaoParams.dataLoteInicial" 
                    
                >  
            </div>
        </div>   

        <div class="row   "  style="width:230px;margin-bottom: 5px;margin-right:2%"    > 
            <div class=" text-start">                
                <label for="dataLoteFinal" class="col-form-label label_cabecalho">Data Cadastro Final</label>              
                <input type="Date"
                    id="dataLoteFinal"
                    class="form-control form-control-sm  text-center padraoCombo "
                    style="margin:0px;width:180px"   
                    v-model="this.loteFiacaoParams.dataLoteFinal"    
                > 
          </div> 
        </div>         

        <div class="row  "   style="margin-right:50px;" >  
            <div class=" text-start">
                <label for="tpMaquina" class="col-form-label  label_cabecalho">Tipo de Maquina</label>
                <select class="form-select padraoCombo form-control form-control-sm  "  
                v-model="this.loteFiacaoParams.tipoMaquina"  
                    >
                    <option value="" >Selecione o tipo de maquina</option>
                    <option v-for="t in  tipoMaquina" :key="t.codigo" :value="t.codigo"> {{ t.nome }}</option>       
                            
                </select> 
            </div> 
        </div>   

        
        <div class="row    "  style="width:170px;margin-bottom: 5px;margin-right:40px"   > 
            <div class=" text-start">                                         
                <label for="lote" class="col-form-label label_cabecalho">Lote</label>    

                <money3 class="form-control text-end form-control-sm " style="margin:0px;"
                    id="lote"            
                    ref="lote"          
                     v-model.lazy="this.loteFiacaoParams.lote" v-bind="config_sd">  
                </money3>                  
                
                
            </div>
        </div>    
<!--
        <div class="row    "  style="width:170px;margin-bottom: 5px;margin-right:2%"   > 
            <div class=" text-start">                                         
                <label for="item" class="col-form-label label_cabecalho">Item</label>    

                <money3 class="form-control text-end form-control-sm" style="margin:0px;"
                    id="item"            
                    ref="item"          
                     v-model.lazy="this.loteFiacaoParams.item" v-bind="config_sd">  
                </money3>                  
                
                
            </div>
        </div>           
 
    -->


        <div class="row espacoEntreComponentes"  >  
            <div class=" text-start">
                <label for="item" class="col-form-label  label_cabecalho">Item</label>
                <div class="input-group"> 

                    <div class="externoCampoConjugado" > 
                            <div class="frontCampoConjugado"> 
                                <!--<input type="text" class="texto21 form-control form-control-sm text-center">   -->

                                <money3 class="form-control text-end form-control-sm" style="margin:0px;"
                                    id="item"            
                                    ref="item"    
                                    @blur="buscaItem"         
                                    v-model.lazy="this.loteFiacaoParams.item" v-bind="config_sd">  
                                    
                                </money3>    

                            </div> 
                        

                            <div class="botaoPesquisa">  
                                <!-- <button type="button" class="btn btn-sm btn-primary bi-search input-group-append" :disabled="itemDesabilitado"></button> -->
                                <button type="button" class="btn btn-sm btn-primary bi-search input-group-append" data-bs-toggle="modal"
                                        data-bs-target="#modalPesquisaItem" tabindex="-1"  @click="apiFlushPesquisa"   > 
                                </button> 

                            </div>           

                            <div class="backCampoConjugado">   
                                <!-- <input type="text" class="limitadorMedia form-control form-control-sm text-center" disabled >  -->
                                <input type="text" class="form-control form-control-sm"                              
                                v-model.trim="this.loteFiacaoParams.dsItem "
                                ref="item_nome" disabled>   
                            </div>  

                    </div>  

                </div>
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
               <th class="col-1 text-start">TIPO_MAQUINA</th>
               <th class="col-1 text-start">LOTE</th>
               <th class="col-1 text-start">ITEM</th>
               <th class="col-1 text-start">DESCRIÇÃO</th>
               <th class="col-1 text-start">QTDE A PROD</th>
               <th class="col-1 text-start">ABERTURA</th>
               <th class="col-1 text-start">FECHAMENTO</th>
               <th class="col-1 text-start">OPER</th>  
                
           </tr>
       </thead> 
 
       <tbody>
            <template v-if="apiDisplayedDadosCRUD">
         
                <tr v-for="(i,indice) in apiDisplayedDadosCRUD" :key="indice">   
                        
                    <td class="col-2 text-start">
                            {{ i.nome_tp_maquina }}
                    </td>   

                    <td class="col-2 text-start">
                        {{ i.lote }}
                    </td> 
            
                    <td class="col-2 text-start">
                            {{ i.item }}
                    </td>

                    <td class="col-2 text-start">
                        {{ i.desc_item }}
                    </td>  

                    <td class="col-2 text-start">
                        {{ i.qtde_a_prod}}
                    </td>

                    <td class="col-2 text-start">
                        {{ i.data_abertura}}
                    </td>  

                    <td class="col-2 text-start">
                        {{ i.data_encerramento}}
                    </td>    
                    
                  
                    <th class="col-2">
                        <router-link :to="{ name: 'lotefiacao' ,    
                            params : {tipoMaquinaProps :i.cd_tipo_maquina ,loteprops:i.lote,  itemprops :i.item, operacao:'A'  }}">                                        
                            <img src="@/assets/icon_editar.gif" alt="Editar" class="botao EspacoEntreBotoes"  height="30">
                        </router-link>   
                    </th> 
                 
                 
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
  
  <PesquisaItem @setaPesquisa="setaPesquisa($event)"></PesquisaItem>
    
</template>

<script> 

import ApiMixin from '@/mixins/ApiMixin' 
 import { mapState } from 'vuex'
 import PesquisaItem from '@/requires/PesquisaItem.vue'; 
 export default {
        
        name: 'LoteFiacaoPesquisaComponent',
        components: { PesquisaItem},
        mixins: [ApiMixin], 
        
        data: () => ({ 
            erros: '',
            mensagemSucesso: '',
            mensagemErro : '', 
            haErros: false,      
            haSucesso: false,    
            exibePaginador:false,        
            resultPesquisaCRUD : [] ,
            resultadoPesquisa:[],
            loteFiacaoDao:[], 
            loteFiacaoParams: { 
                idfil:""   ,
                dataInicial:"",
                dataFinal:"",
                tipoMaquina:"",
                lote:"",
                item:"",
                dsItem:"" 

            },            
            loteFiacaoParamsDAO: { 
                idfil:""   ,
                dataInicial:"",
                dataFinal:"",
                tipoMaquina:"",
                lote:"",
                item:"" 

            },         
            tipoMaquina: [], 
            tipoMaquinaTemp: {    
                 codigo:'' ,
                 nome:  '' , 
            } ,
            liber:''
        
        }),
        computed: mapState(['usuarioSistema']),
        methods: { 
            NavegarParaInclusao( ){ 
                this.$router.push({name:'lotefiacao', params : {tipoMaquinaProps : '00' ,loteprops:' ',  itemprops :' ', operacao:'I'  }})
                 
            },
            setaPesquisaCRUD(pCursor) {  
                this.resultPesquisaCRUD = pCursor   

            } ,
            resetaCampos() {  

                //console.log('Resetar');
                this.loteFiacaoParams.idfil = this.$store.state.usuarioSistema.idfil; 
                this.loteFiacaoParams.lote="";
                this.loteFiacaoParams.item="";
                this.loteFiacaoParams.dsItem="";


                this.loteFiacaoParams.dataLoteInicial="";
                this.loteFiacaoParams.dataLoteFinal="";  
                this.loteFiacaoParams.tipoMaquina="";

                this.resultPesquisaCRUD = [];
                this.exibePaginador = false;
                
                //this.populaForm();               

            }  ,   

            setaPesquisa(e) {   
        
                    this.loteFiacaoParams.item=  e.obj.codigo;
                    this.loteFiacaoParams.dsItem = e.obj.material.descricao; 
            },  
            async buscaItem(){

                if  (this.loteFiacaoParams.item!='0'   ){
                    this.loteFiacaoParams.item = this.loteFiacaoParams.item.padStart(7, '0');
                    const descIt = await this.apiPesquisaParam('item', this.loteFiacaoParams.item, this.loteFiacaoParams)  
                    this.liber = descIt
               }

            }, 
            
        pesquisaDados(){    

            console.log('pesquisaDados')
            console.log(this.loteFiacaoParams )

            let periodoPreenchido = true; 

            if ((this.loteFiacaoParams.dataLoteInicial == null || this.loteFiacaoParams.dataLoteInicial == "")
                &&  !(this.loteFiacaoParams.dataLoteFinal == null || this.loteFiacaoParams.dataLoteFinal == "")  
            ){
                //this.haErros = true;
                //this.mensagemErro = "Informe a data inicial  " + this.loteFiacaoParams.dataLoteInicial ; 
                
                this.apiDisplayMensagem("Informe a data inicial  " + this.loteFiacaoParams.dataLoteInicial );
                console.log("Informe a data inicial")  ;
                periodoPreenchido  = false;
             }   

            //console.log('periodoPreenchido 2')
            //console.log(periodoPreenchido)               
             
             if ((this.loteFiacaoParams.dataLoteFinal == null || this.loteFiacaoParams.dataLoteFinal == "") 
                && !(this.loteFiacaoParams.dataLoteInicial == null || this.loteFiacaoParams.dataLoteInicial == "")
             ){
                //this.haErros = true;
                //this.mensagemErro = "Informe a data final"  ;
                console.log("Informe a data final")  ;
                this.apiDisplayMensagem("Informe a data final");
                periodoPreenchido  = false;                                      
             }    

            //console.log('periodoPreenchido 3')
            //console.log(periodoPreenchido)               
       

            if(periodoPreenchido) {
                this.haErros = false
                this.exibePaginador = true;
                this.apiPesquisaCRUDByFilial('lote','nome',  this.loteFiacaoParams )
            }
            
        },

        navegarParaLogin(){this.$router.push({name:'login'  })}   
        } , 

        created(){    
            
            this.loteFiacaoParams.idfil = this.$store.state.usuarioSistema.idfil;
            this.populaTipoMaquina();
            this.resetaCampos(); 

       }, 
        
        mounted(){ 
          
            this.resetaCampos();   
               
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

 
 