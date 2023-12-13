<template  >  

<form  @submit.stop.prevent="submitForm"  >  

        <div>  
            <div class="principal cinzaClaro">
                <p class="card-header text-center" style="font-size: 30px; margin-bottom: 80px; margin-top: 2%;color: blue; font-weight: bold;">Tipo de Maquina</p>
            </div>    
        </div>        

        <div class="flex-container ">   

            <div class="divCentral">     

                <div class="divForm">  

                        <div class="row col-md-12"  >  
                            <div class=" text-start">
                                <label for="codTipoMaquina" class="col-form-label  label_cabecalho">Código</label>
                                <div class="input-group">
                                    <div class="col-md-1">
                                        <input   id="codTipoMaquina" ref="codigoTipoMaquina" 
                                        maxlength="2" 
                                        @blur="buscaByCodigo"
                                        class="form-control form-control-sm text-center" v-model ="tipoMaquina.codigo" v-mask data-maska="##" > <!-- v-maskaata-maska="##"-->
                                    </div> 
                                </div>
                            </div> 
                        </div>

                        <div class="row col-md-12"> 
                            
                                    <label for="nomeTipoMaquina" class="col-form-label label_cabecalho">Descrição</label> 
                                                
                                    <Popper arrow hover class="dark col-md-4">
                                        
                                        <template #content v-if="v$.tipoMaquina.nome.$error">
                                            <div v-html="apiListaErros(v$.tipoMaquina.nome.$errors)"></div>
                                        </template> 
                                    
                                        <input type="text"
                                            id="nomeTipoMaquina"
                                            class="form-control form-control-sm text-uppercase"
                                            maxlength="30"                                        
                                            ref="nomeTipoMaquina" 
                                            :class="{ error: v$.tipoMaquina.nome.$error}" v-model.trim="v$.tipoMaquina.nome.$model"
                                        > 
                                
                                    </Popper>   
                                
                        </div> 
                             
                    <div class="row "> 
                
                            <div class="row espacoEntreComponentes "  >  
                                <div class=" text-start">
                                    <label for="codTipoMaquina" class="col-form-label  label_cabecalho">Classe de Material</label>
                                    <div class="input-group"> 

                                        <div class="campoAgrupado tornarFlex "> 
                                            <div class="campoCodigo"> 
                                                
                                                    <Popper arrow hover class="dark  ">
                                                        
                                                        <template #content v-if="v$.tipoMaquina.cdClasse.$error">
                                                            <div v-html="apiListaErros(v$.tipoMaquina.cdClasse.$errors)"></div>
                                                        </template> 
                                                    
                                                        <input type="text"
                                                            id="classematerial"
                                                            class="form-control form-control-sm"
                                                            maxlength="4"
                                                            v-maska  data-maska="####"
                                                            :class="{ error: v$.tipoMaquina.cdClasse.$error}" v-model.trim="v$.tipoMaquina.cdClasse.$model"
                                                            @blur="apiPesquisaParam('classematerial', tipoMaquina.cdClasse, this.tipoMaquina)"> 
                                                
                                                    </Popper>    
                                            </div>

                                            <div class="botaoPesquisa">  
                                                <button type="button" class="btn btn-sm btn-primary bi-search input-group-append" data-bs-toggle="modal"
                                                        data-bs-target="#modalPesquisaClasseMaterial" tabindex="-1"  @click="apiFlushPesquisa">
                                                </button>
                                            </div>           

                                            <div class=" descricaoPesquisa ">   
                                                <Popper arrow hover class="dark ajusteDescricaoPesquisa"> 

                                                    <template #content v-if="v$.tipoMaquina.dsClasse.$error">
                                                        <div v-html="apiListaErros(v$.tipoMaquina.dsClasse.$errors)"></div>
                                                    </template> 
                                                
                                                    <input type="text" class="form-control form-control-sm"
                                                        :class="{ error: v$.tipoMaquina.dsClasse.$error }" 
                                                        v-model.trim="v$.tipoMaquina.dsClasse.$model"
                                                        ref="classematerial_nome" disabled>   

                                                </Popper>  
                                            </div>   


                                            
                                        </div>  

                                    </div>
                                </div> 
                            </div>    

                    </div> 


                </div> <!--  DIV FORM --> 
            </div>    <!--  DIV CENTRAL-->          

            
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
         

        <div class="row rodape "  >

            <div class="col-9 "  >
                <p v-if="haErros && this.$store.state.tipoDispositivo == 'desktop'" class="mensagem mensagem_erro">
                    {{ mensagemErro }}
                </p>
                <p v-if="haSucesso && this.$store.state.tipoDispositivo == 'desktop'"  class="mensagem mensagem_sucesso">
                    {{ mensagemSucesso }}
                </p>
            </div> 
 
            <div class="col-3 div_rodape d-flex justify-content-end">
                

                 <button   type="button"  class="btn btn-sm btn-primary ms-2 me" accesskey="n" @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>ovo</button> 

                <button v-if="tipoOperacao == 'E' || tipoOperacao  == 'A'  " type="button"  accesskey="e" class="btn btn-sm btn-primary ms-2 me"  @click="exibeModal('excluir','Confirma exclusão ?',['S','N'],'aviso'  )"><u>E</u>xcluir
                </button>              

                <button v-if="(tipoOperacao  == 'I' || tipoOperacao  == 'A'  )" type="submit" class="btn btn-sm btn-primary ms-2 me" accesskey="s"><u>S</u>alvar</button>
                <button type="button" class="btn btn-sm btn-secondary ms-2 me" accesskey="p" @click="exibeModal('pesquisar','Deseja sair deste formulário?',['S','N'] ,'sucesso' )"><u>P</u>esquisar</button>


            </div> 


        </div>  

</form>

  
  <PesquisaClasseMaterial @setaPesquisa="setaPesquisa($event)"></PesquisaClasseMaterial>
  <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes" :tipo="simNaoTipo"></SimNao>
  
</template>

<script>
   import ApiMixin from '@/mixins/ApiMixin' 
   import { mapState } from 'vuex'    
   import useValidate from '@vuelidate/core'
   import { required, helpers } from '@vuelidate/validators'   
   import PesquisaClasseMaterial from '@/requires/PesquisaClasseMaterial'
   import SimNao from '@/requires/SimNao.vue'
   import Popper from 'vue3-popper'
 

   export default {

       name: 'TipoMaquinaComponent',
       setup: () => (
            { v$: useValidate() }
        ),
        components: { PesquisaClasseMaterial, SimNao, Popper },
        validations: {
            tipoMaquina: {
                     
                    nome: { required: helpers.withMessage('Informe a descricao do tipo de maquina', required)} ,  //, $lazy: true 
                    cdClasse: { required: helpers.withMessage('Informe a classe de material', required) } ,
                    dsClasse: { required: helpers.withMessage('Informe a descricao da classe de material', required) }   
            }

        },   
       mixins: [ApiMixin],
        data: () => ({  
            resultado: {},
            acao:'',
            simNaoPergunta: '',
            simNaoBotoes: [],
            simNaoRetorno: '',
            letraEntradaSaida: '',
            letraSimNao: '',            
            erros: '',
            mensagemSucesso: '',
            mensagemErro : '', 
            haErros: false,      
            haSucesso: false,
            ehInclusao : false ,
            simNaoTipo: 'sucesso',
            tipoOperacao:'A', 
            tipoMaquinaTemp: [], 
            
            tipoMaquina: {               
                 idfil: '',
                 codigo:'' ,
                 nome:  '',
                 cdClasse: '',
                 dsClasse: ''  
            },
            tipoMaquinaInicial: {               
                 idfil: '',
                 codigo:'' ,
                 nome:  '',
                 cdClasse: '',
                 dsClasse: ''      


            },
            tipoMaquinaDAO: []
          }),
       computed: {...mapState(['usuarioSistema']) } , 
       props: {
            codigo : {
            type: String,
            required: true,
            },
            operacao: {
            type : String,
            required: true,
            },
        },
       methods:{  
      
         
         async buscaByCodigo(){
            const resposta = await this.populaForm();     

                if (!(resposta === true) ){
                    console.log('Erro de cadastro BuscaChave' );      
                } 
        },   

        confirmaAcao(resposta) {

            this.simNaoRetorno = resposta

            console.log('confirmaAcao');
            console.log(this.simNaoRetorno ); 

            if(resposta == 'O'){ 
                console.log(this.simNaoRetorno ); 
            }

            
            if(this.simNaoRetorno == 'S') {
                if(this.acao == 'excluir'){
                    this.tipoOperacao = 'E';
                    this.exclusao();
                }else if(this.acao == 'cancelaEdicao')
                {
                    this.resetarForm();
                }
                else if(this.acao == 'pesquisar')
                {
                    this.$router.push( { name: 'tipomaquinapesquisa'} )
                }
                
            }

        }
        , 
        async exclusao() {
 
              /// EXCLUSAO ////

               let url = `${process.env.VUE_APP_BASE_URL}/tipomaquina/filial/${this.$store.state.usuarioSistema.idfil}/codigo/${this.tipoMaquina.codigo}`   
                
               
               if (this.tipoOperacao == 'E' && this.simNaoRetorno == 'S') {  

                    //await this.axios.delete(
                   //     url,
                   //     JSON.stringify(this.tipoMaquinaDAO),
                   //     this.apiTokenHeader({ "Content-Type": "application/json" })
                    //)
                    this.axios.delete(url,this.apiTokenHeader() )
                    .then(response => {
                        this.resetarForm();
                        this.apiDisplayMensagemSucesso('Código ' + response.data  + ' excluido com sucesso.'  )
                    })
                    .catch(error => {
                        console.log("Erro: ", error.response.data);
                        //this.haErros = true
                        //this.mensagemErro = error.response.data
                        this.apiDisplayMensagem(error.response.data  )
                    }); 

                }


          },
         
        async submitForm() { 


            this.haErros = false
            this.haSucesso = false  
            this.mensagemSucesso = ''
            this.mensagemErro = ''
            

            this.itens.forEach(element => {
                element.errors = []  
                })    
 
            const isFormCorrect = await this.v$.$validate()
            if (isFormCorrect) {
                let url = `${process.env.VUE_APP_BASE_URL}/tipomaquina`
                this.tipoMaquinaDAO =
                {
                "idfil": this.$store.state.usuarioSistema.idfil,
                "codigo": (this.tipoMaquina.codigo) ,
                "nome":  this.tipoMaquina.nome,
                "cdClasse": this.tipoMaquina.cdClasse,
                "dsClasse": this.tipoMaquina.dsClasse,
                "classeMaterial.id":this.tipoMaquina.cdClasse 
                } 
                if (this.tipoOperacao=="I") { 
                  
                   
                        // registro nao existe
                        await this.axios.post(
                            url,
                            JSON.stringify(this.tipoMaquinaDAO),
                            this.apiTokenHeader({ "Content-Type": "application/json" })
                        )
                        .then(response => { 
                            this.tipoMaquina.codigo = response.data;   /// JSON.stringify();  
                            this.apiDisplayMensagemSucesso('Código ' + response.data  + ' inserido com sucesso.'  )
                            this.tipoMaquina.codigo = response.data; ////JSON.stringify(response.data);  


                            this.tipoOperacao = 'A';
                        
                        })
                        .catch(error => {
                            console.log("Erro: ", error.response.data);
                            this.haErros = true
                            this.mensagemErro = error.response.data
                        }); 

             

                } else { 

                            if (this.tipoOperacao == 'A'   ) { 
                                await this.axios.put(
                                        url,
                                        JSON.stringify(this.tipoMaquinaDAO),
                                        this.apiTokenHeader({ "Content-Type": "application/json" })
                                    )
                                    .then(response => { 

                                        //this.haSucesso = true 
                                        //this.mensagemSucesso = response.data  
                                        this.apiDisplayMensagemSucesso('Código ' + response.data  + ' alterado com sucesso.'  )
                                     
                                        
                                    })
                                    .catch(error => { 
                                        console.log("Erro: ", error.response.data);
                                        //this.haErros = true
                                        //this.mensagemErro = error.response.data
                                        this.apiDisplayMensagem(error.response.data  )
                                    });
                            }  

                        }

            } else {
                    return
            }

        },
        resetarForm(){
 

            if(this.simNaoRetorno == 'S'){ 

                console.log('Resetando');

                this.tipoMaquina = Object.assign({},this.tipoMaquinaInicial); 
                this.v$.$reset(); 
                this.ehInclusao = true; 
                this.erros= '';
                this.mensagemSucesso= '';
                this. mensagemErro= ''; 
                this.haErros= false;      
                this.haSucesso= false;
                this.tipoOperacao = 'I';  
                var input = document.querySelector("#codTipoMaquina");
                input.disabled = false ;    
                //this.tipoMaquina.codigo ="";
                this.$refs.codigoTipoMaquina.focus();   
   
            }  

       
 
        },
 

    
        setaPesquisa(e) {

        if (e.tipo == "classematerial") {
            this.tipoMaquina.cdClasse = e.obj.id;
            this.tipoMaquina.dsClasse = e.obj.nome;
        }
        },     

        async populaForm(){    
 
            let retornoPopForm=false;  
            if (this.tipoMaquina.codigo.trim().length >0){ 

                 if(this.tipoMaquina.codigo.trim().length == 1){
                     this.tipoMaquina.codigo  = '0' + this.tipoMaquina.codigo.trim();
                }

                console.log('this.tipoMaquina.codigo.length');
                console.log(this.tipoMaquina.codigo.trim().length);

                let url = `${process.env.VUE_APP_BASE_URL}/tipomaquina/filial/${this.$store.state.usuarioSistema.idfil}/tipomaquina/${this.tipoMaquina.codigo}`;


            
                console.log(url)  

               await this.axios.get(url,this.apiTokenHeader())
               .then(response => {        

               this.resultado = response.data;   
               this.tipoMaquina.nome = this.resultado.nome.trim() ;
               this.tipoMaquina.cdClasse = this.resultado.cdClasse ;
               this.tipoMaquina.dsClasse  = this.resultado.classeMaterial.nome.trim()  ; 
              
               var input = document.querySelector("#codTipoMaquina");
               input.disabled = true;     

               if(this.tipoOperacao == 'I' &&  this.resultado!='' ){  
                    this.tipoOperacao = 'A'; 
                }

                if(this.resultado==''){
                    this.mensagemErro =  'Registro não existe. Cadastre-o.'; 
                    this.haErros = true  
                }
                retornoPopForm = true;

               })
               .catch(error => {

                  if(this.tipoOperacao == 'I' ){  
                     var input = document.querySelector("#codTipoMaquina");
                     input.disabled = true;    
                     this.tipoMaquina.codigo = ''; 
                     this.mensagemErro =  'Tipo Máquina não existe. Cadastre-a.'; 
                     this.haErros = true
                      
                  }else{  
                     console.log("Erro: ", error);
                     this.haErros = true
                    }
                    retornoPopForm = false;         
                }  
                );

               } 

            return retornoPopForm

          },

        navegarParaLogin(){this.$router.push({name:'login'  })}   
        } , 

        async created(){      

            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            } 

        
            if(this.operacao=='A'){
                 this.tipoOperacao = 'A' 
            }else if(this.operacao=='I'){
                this.tipoOperacao = 'I'  
            }else if(this.operacao=='E'){
                this.tipoOperacao = 'E'  
            } 
   
             if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){                   
             
                   this.tipoMaquina.codigo = this.codigo ;

                    const resposta = await this.populaForm();     

                    if (!(resposta === true) ){
                        console.log('Erro de cadastro BuscaChave' );      
                    } 
             }  

       },
       mounted(){
        if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){  
            this.$refs.nomeTipoMaquina.focus();   
        } else{ 
            this.$refs.codigoTipoMaquina.focus();  
        }  
       } 

          
         
   } 
</script>
   
 
 

 <style scoped>


.tornarFlex{ 
    display: flex; 
} 

@media screen and (max-width: 560px){
 
        .campoAgrupado{
            
            align-content: center;
            /*border: solid 5px; 
            border-color:green; 
            background-color:cornflowerblue ;*/
             
            display: flex;
            flex-wrap: wrap;
            margin-right: 5px;     
            margin-bottom: 5px; 
            max-width: 290px;           
            
        }  

} 
.ajusteDescricaoPesquisa{
    text-align: center;
    width: 100%;

}

.campoAgrupado{    
    align-content: center;
    /*border: solid 5px; 
    border-color:brown; 
    background-color:cornflowerblue ; */
    
    display: flex;
    flex-wrap: wrap;
    margin-right: 0px;     
    margin-bottom: 5px; 
} 

.espacoEntreComponentes{
      margin-right: 10px;  
 }

 .campoCodigo{
    
    /*background-color: aqua;*/
    width: 100px;
 
}  

.descricaoPesquisa{      
    width:550px;        
} 



.corpoCrud{

    width: 80%;
    background-color: #E0E0E0;;
    margin-left: 10%; 
    height: 100%;

} 




</style>