<template>
    
    <form  @submit.stop.prevent="submitForm" @reset.prevent="resetarForm($event)">  

        <div>  
            <div class="principal cinzaClaro">
                <p class="card-header text-center" style="font-size: 30px; margin-bottom: 80px; margin-top: 2%;color: blue; font-weight: bold;">Usuários</p>
            </div>    
        </div> 


        <div class="flex-container ">    
             <div class="divCentral">     
                <div class="divForm">   

                    <div class="flex-linha">  
                        
                            <div class="row  espacoEntreComponentes"  >  
                                <div class=" text-start">
                                    <label for="descMaquina" class="col-form-label  label_cabecalho">Sistema</label>
                                    <select class="form-select  padraoCombo" 
                                        ref="tpMaquina"
                                        :disabled="sistemaDesabilitado"   
                                        @blur="configuraCampos" 
                                        v-model="this.sistema.sigla" 
                                        >
                                        <option value="" disabled>Selecione o sistema</option>
                                        <option v-for="t in this.sistema" :key="t.sigla" :value="t.sigla"> {{ t.sigla }} - {{ t.nome }}</option>       
                                            
                                    </select> 
                                </div> 
                            </div>     
                         
             
                        
                         
                    </div>     




                    <div class="flex-linha"> 
 

                        <div class="row espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="maquina" class="col-form-label  label_cabecalho">Usuário</label>
                                <div class="input-group"> 

                                    <div class="externoCampoConjugado" > 
                                            <div class="frontCampoConjugado"> 
                                                <!--<input type="text" class="texto21 form-control form-control-sm text-center">   -->

                                                <Popper arrow hover class="dark  ">
                                                        
                                                        <template #content v-if="v$.usuario.codigo.$error">
                                                            <div v-html="apiListaErros(v$.usuario.codigo.$errors)"></div>
                                                        </template> 
                                                    
                                                        <input type="text" 
                                                            id="usuario"
                                                            class="form-control form-control-sm"
                                                            maxlength="6"
                                                            v-maska  data-maska="######"
                                                            @blur="buscaByChave"
                                                            
                                                            :class="{ error: v$.usuario.codigo.$error}" v-model.trim="v$.usuario.codigo.$model" 
                                                            >                                                 
                                                    </Popper>   

                                            </div> 
                                        

                                            <div class="botaoPesquisa">  
                                                <button type="button" class="btn btn-sm btn-primary bi-search input-group-append"  ></button> 
                                            </div>           

                                            <!-- 
                                            <div class="backCampoConjugado">   
                                                <input type="text" class="limitadorMedia form-control form-control-sm text-center" disabled > 
                                            </div>   
                                            -->
                                            <div class=" backCampoConjugado ">   
                                                <Popper arrow hover class="dark limitadorMedia "> 

                                                    <template #content v-if="v$.nomeUsuario.$error">
                                                        <div v-html="apiListaErros(v$.nomeUsuario.$errors)"></div>
                                                    </template> 
                                                
                                                    <input type="text" class="form-control form-control-sm"
                                                        :class="{ error: v$.nomeUsuario.$error }" 
                                                        v-model.lazy="v$.nomeUsuario.$model"
                                                        ref="nomeusuario" disabled>   

                                                </Popper>  
                                            </div>   


                                    </div>  

                                </div>
                            </div> 
                         </div>  

        



                    </div>    <!--  FIM LINHA 0003 -->    


                    <div class="flex-linha">   


                        <div class="row espacoEntreComponentes    "   > 
                            
                            <label for="login" class="col-form-label label_cabecalho">Login</label> 
                                        
                            <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;" >
                                
                                <template #content v-if="v$.usuario.login.$error">
                                    <div v-html="apiListaErros(v$.usuario.login.$errors)"></div>
                                </template> 
                            
                                <input type="text"
                                    id="login"
                                    class="form-control form-control-sm    "
                                    style="margin:0px;"
                                    maxlength="20"                                        
                                    ref="login"      
                                                           
                                    :class="{ error: v$.usuario.login.$error}" v-model.trim="v$.usuario.login.$model"
                                > 
                        
                            </Popper>   
                        
                        </div>   

                    </div>    <!--  FIM LINHA 0003 -->    

 

                    <div class="flex-linha">   


                        <div class="row espacoEntreComponentes    "   > 
                            
                            <label for="senha" class="col-form-label label_cabecalho">Senha</label> 
                                        
                            <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;" >
                                
                                <template #content v-if="v$.usuario.senha.$error">
                                    <div v-html="apiListaErros(v$.usuario.senha.$errors)"></div>
                                </template> 
                            
                                <input type="password"
                                    id="login"
                                    class="form-control form-control-sm  "
                                    style="margin:0px;"
                                    maxlength="20"                                        
                                    ref="senha"      
                                                        
                                    :class="{ error: v$.usuario.senha.$error}" v-model.trim="v$.usuario.senha.$model"
                                > 

                            </Popper>   

                        </div>   

                    </div>    <!--  FIM LINHA 0003 -->   


                    <div class="flex-linha">   


                        <div class="row espacoEntreComponentes    "   > 
                            
                            <label for="senha" class="col-form-label label_cabecalho">Confirma senha</label> 
                                        
                            <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;" >
                                
                                <template #content v-if="v$.confirmaSenha.$error">
                                    <div v-html="apiListaErros(v$.confirmaSenha.$errors)"></div>
                                </template> 
                            
                                <input type="password"
                                    id="confirmaSenha"
                                    class="form-control form-control-sm  "
                                    style="margin:0px;"
                                    maxlength="20"                                        
                                    ref="confirmaSenha"      
                                                        
                                    :class="{ error: v$.confirmaSenha.$error}" v-model.trim="v$.confirmaSenha.$model"
                                > 

                            </Popper>   

                        </div>   

                    </div>    <!--  FIM LINHA 0003 -->   

  
                    
                </div>
            </div>
        </div>

    </form>  
    
    <div class="row rodape">

        <div class="col-9">
            <p v-if="haErros" class="mensagem mensagem_erro">
                {{ mensagemErro }}
            </p>
            <p v-if="haSucesso" class="mensagem mensagem_sucesso">
                {{ mensagemSucesso }}
            </p>
        </div> 

        <div class="col-3 div_rodape d-flex justify-content-end">
            <button  v-if="tipoOperacao == 'I' || tipoOperacao == 'A'" type="reset"  class="btn btn-sm btn-primary ms-2 me" accesskey="n"><u>N</u>ovo</button>
            <button v-if="tipoOperacao == 'E'" type="button"  accesskey="e" class="btn btn-sm btn-danger ms-2 me" data-bs-toggle="modal"
                data-bs-target="#modalSimNao"><u>E</u>xcluir
            </button>
            <button v-if="(tipoOperacao  == 'I' || tipoOperacao  == 'A'  )" type="submit" class="btn btn-sm btn-primary ms-2 me" accesskey="s"><u>S</u>alvar</button>
            <button type="button" class="btn btn-sm btn-secondary ms-2 me" accesskey="p" @click="pesquisar"><u>P</u>esquisar</button>
        </div> 

    </div>   
    
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
   import ApiMixinSEG from '@/mixins/ApiMixinSEG'

    export default {


            //   components: {    Popper },
        name: 'UsuarioComponent',
        setup: () => (
            { v$: useValidate() }
        ),
        components: { PesquisaClasseMaterial, SimNao, Popper },
        validations: {
            usuario: {
                     
                    sistema: { required: helpers.withMessage('Informe o sistema', required)} ,  //, $lazy: true 
                    codigo: { required: helpers.withMessage('Informe o usuario', required) } ,
                    login: { required: helpers.withMessage('Informe o login', required) }   ,
                    senha: { required: helpers.withMessage('Informe a senha', required) }   
                    
            },
            confirmaSenha: { required: helpers.withMessage('Confirme a senha', required) },   
            nomeUsuario: { required: helpers.withMessage('Nome do usuario nao informado', required) }

        },   
       mixins: [ApiMixin,ApiMixinSEG],
 
        data: () => ({
            
            resultado : "",             
            simNaoPergunta: '',
            simNaoBotoes: [],
            simNaoRetorno: '',
            erros: '',
            mensagemSucesso: '',
            mensagemErro : '', 
            haErros: false,      
            haSucesso: false,
            ehInclusao : false ,
            simNaoTipo: 'sucesso',
            tipoOperacao:'A', 
            UsuarioTemp: [], 
            nomeUsuario:'',
            confirmaSenha:'',
            
            usuario : {    
                 id:0,                            
                 sistema:'' ,
                 codigo:  '',
                 login: '',
                 senha: ''  
            },    
            
            sistema :[],
            sistemaTemp:{    
                id: 0,
                sigla: '',
                nome: '',
                tipoLogin: '',
                tipoCodificacaoSenha: '' 
            },                

        }),
        computed: {...mapState(['usuarioSistema']) } ,      

        props: {
            sistemaProps : {
            type: String,
            required: true,
            },
            operacao: {
            type : String,
            required: true,
            },
        },  
        methods:{ 
            async submitForm() { 
                    console.log('')
            },
            resetarForm(){
                console.log('')

            },
            configuraCampos(){
                console.log('')
            },
            populaForm(){
                console.log('')
            },

            buscaByCodigo(){ 

                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = ''                

                if (this.usuario.codigo!='' && this.usuario.codigo!=null && this.sistema!=null && this.usuario.nome!='' && this.usuario.nome!=null  ){ 

                         this.populaForm();   

                } else{ 

                        this.haErros = true
                        this.mensagemErro = "Informe o sistema e o usuário." 
                        this.usuario.codigo ="";                                
                        this.$refs.usuario.codigo.focus();   
                }


            }, 




        } ,

        created(){  

            
            this.populaSistema();
           
            

            if(this.operacao=='A'){
                this.tipoOperacao = 'A' 
            }else if(this.operacao=='I'){
                this.tipoOperacao = 'I'  
            }else if(this.operacao=='E'){
                this.tipoOperacao = 'E'  
            } 

            if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){                   
               // this.tipoMaquina.codigo = this.codigo ;
                this.populaForm();   
            }  

            },
       mounted(){

                this.sistema.sigla=this.sistemaProps;

                console.log('this.sistema.sigla')
                console.log(this.sistema.sigla)


                if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){  
                    // this.$refs.nomeTipoMaquina.focus();   
                    console.log('xxx')
                } else{ 
                   // this.$refs.codigoTipoMaquina.focus();  
                   console.log('yyy')
                }  
            } 


   }

   </script>

  