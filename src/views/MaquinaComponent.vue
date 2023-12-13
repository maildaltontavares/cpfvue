<template>
    
    <form @submit.stop.prevent="submitForm"  >  

        <div>  
            <div class="principal cinzaClaro">
                <p class="card-header text-center" style="font-size: 30px; margin-bottom: 80px; margin-top: 2%;color: blue; font-weight: bold;">Máquina</p>
            </div>    
        </div> 


        <div class="flex-container ">    
             <div class="divCentral">     
                <div class="divForm">   

                    <div class="flex-linha"> 
                        
                        <div class="row  espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="descMaquina" class="col-form-label  label_cabecalho">Tipo de Maquina</label>
                                <select class="form-select  padraoCombo" 
                                      ref="tpMaquina"
                                      :disabled="tpMaquinaDesabilitado"   
                                      @blur="configuraCampos" 
                                       v-model="this.cdTipoMaquina" 
                                     >
                                    <option value="" disabled>Selecione o tipo de maquina</option>
                                    <option v-for="t in this.tipoMaquina" :key="t.codigo" :value="t.codigo"> {{ t.nome }}</option>       
                                         
                                </select> 
                            </div> 
                        </div>     
                         
                    </div>   



                    <!--  LINHA 001 -->

                    <div class="flex-linha">   

                        <div class="row  espacoEntreComponentes "  >   
                                <label for="codigoMaquina"  class="col-form-label  label_cabecalho" >Código</label>  
                                    <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;" >

                                        <template #content v-if="v$.maquina.codigo.$error">
                                             <div v-html="apiListaErros(v$.maquina.codigo.$errors)"></div>
                                        </template>  
                                       
                                        <input  type="text"
                                            id="codigoMaquina" 
                                            ref="codigoMaquina"                          
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            :class="{ error: v$.maquina.codigo.$error}"
                                            :disabled="cdMaquinaDesabilitado"  
                                            @blur="buscaByCodigo"  
                                            v-model.lazy="v$.maquina.codigo.$model" 
                                           
                                         > 

                                    </Popper>                                     
                               
                        </div>    

                    </div>    

                      <!--  FIM LINHA 0001 -->    
                    <div class="flex-linha">                    
                         <div class="linha"></div>
                    </div>

                      
                    <!--  LINHA 002 -->

                    <div class="flex-linha"> 

                        <div class="row espacoEntreComponentes " style="width:380px;"  > 
                            
                            <label for="nomeMaquina" class="col-form-label label_cabecalho">Descrição</label> 
                            <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;"  >
                                
                                <template #content v-if="v$.maquina.nome.$error">
                                    <div v-html="apiListaErros(v$.maquina.nome.$errors)"></div>
                                </template> 
                            
                                <input type="text"
                                    id="nomeMaquina"
                                    class="form-control form-control-sm text-uppercase padraoDesc "
                                    style="margin:0px;"
                                    maxlength="30"                                        
                                    ref="nomeMaquina" 
                                    :class="{ error: v$.maquina.nome.$error}" v-model.trim="v$.maquina.nome.$model"
                                > 
                        
                            </Popper>   
                        
                        </div>  
                        

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                            
                            <label for="localFisico" class="col-form-label label_cabecalho">Local Fisico</label> 
                                        
                            <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >
                                
                                <template #content v-if="v$.maquina.localFisico.$error">
                                    <div v-html="apiListaErros(v$.maquina.localFisico.$errors)"></div>
                                </template> 
                            
                                <input type="text"
                                    id="localFisico"
                                    class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                    style="margin:0px;"
                                    maxlength="3"      
                                    @keyup="apiAddLeadingZero($event,maquina.localFisico)"                                 
                                    ref="local" 
                                    v-maska data-maska="###" 
                                    :class="{ error: v$.maquina.localFisico.$error}" v-model.lazy="v$.maquina.localFisico.$model"
                                > 
                        
                            </Popper>   
                        
                        </div>   

                         
                        <div class="row espacoEntreComponentes" v-if="habilitaCodigoAbertura" style="width:230px;"  > 
                                
                                <label for="codigoAbertura"   class="col-form-label label_cabecalho">Linha de abertura</label> 
                                            
                                <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;"  >
                                    
                                    <template #content v-if="v$.maquina.codigoAbertura.$error">
                                        <div v-html="apiListaErros(v$.maquina.codigoAbertura.$errors)"></div>
                                    </template>  

                                    <select   class="form-select padraoCombo form-control form-control-sm "  :class="{ error: v$.maquina.codigoAbertura.$error}"  v-model="v$.maquina.codigoAbertura.$model">
                                        <option value="" disabled>Selecione a linha de abertura</option> 
                                        <option v-for="a in optAbertura" :key="a.codigo" :value="a.codigo"> {{ a.codigo }}</option>    
                                    </select>         
                            
                                </Popper>   
                            
                        </div>    

                    </div>    

                    <!--  FIM LINHA 0002 -->            
                    
                    
                    <!--  LINHA 003 -->
 

                    <div class="flex-linha">
 
                        <div class="row espacoEntreComponentes    " v-if="habilitaLado"  >                                
                                <label for="lado" class="col-form-label label_cabecalho">Lado</label>                                             
                                <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;" >
                                    
                                    <template #content v-if="v$.maquina.lado.$error">
                                        <div v-html="apiListaErros(v$.maquina.lado.$errors)"></div>
                                    </template>  

                                    <select   class="form-select padraoCombo form-control form-control-sm"  :class="{ error: v$.maquina.lado.$error}"  v-model="v$.maquina.lado.$model">
                                        <option value="" disabled>Selecione o lado</option> 
                                        <option   v-for="l in ladoMaq" :key="l.codigo" :value="l.codigo">{{ l.nome }} </option>      
                                    </select>         
                            
                                </Popper>   
                            
                        </div>        

                    </div>    

                    <!--  FIM LINHA 0003 -->                        

                    <div class="flex-linha"> 

                      
                        <div class="row espacoEntreComponentes    "   v-if="habilitaNumFusos"  style="width:180px;"  > 
                            
                            <label for="numFusos" class="col-form-label label_cabecalho">Num. fusos por lado</label> 
                                        
                            <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;" >
                                
                                <template #content v-if="v$.maquina.numFusos.$error">
                                    <div v-html="apiListaErros(v$.maquina.numFusos.$errors)"></div>
                                </template> 
                            
                                <input type="text"
                                    id="numFusos"
                                    class="form-control form-control-sm text-uppercase padraoCodigo text-center text-center "
                                    style="margin:0px;"
                                    maxlength="4"                                        
                                    ref="numFusos" 
                                    v-maska data-maska="####" 
                                    :class="{ error: v$.maquina.numFusos.$error}" v-model.trim="v$.maquina.numFusos.$model"
                                > 
                        
                            </Popper>   
                        
                        </div>     

                        <div class="row espacoEntreComponentes    " v-if="habilitaMqSSM"  > 
                            
                            <label for="mqSSM" class="col-form-label label_cabecalho">Cod SSM</label> 
                                        
                            <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;">
                                
                                <template #content v-if="v$.maquina.mqSSM.$error">
                                    <div v-html="apiListaErros(v$.maquina.mqSSM.$errors)"></div>
                                </template> 
                            
                                <input type="text"
                                    id="mqSSM"
                                    class="form-control form-control-sm text-uppercase padraoCodigo text-center text-center "
                                    style="margin:0px;"
                                    maxlength="4"                                        
                                    ref="mqSSM"                                    
                                    :class="{ error: v$.maquina.mqSSM.$error}" v-model.trim="v$.maquina.mqSSM.$model"
                                > 
                        
                            </Popper>   
                        
                        </div>       

                    </div>    

                    <div class="flex-linha">
 

                            <div class="row espacoEntreComponentes    " v-if="habilitaNumSerie"  style="width:380px;"> 
                            
                                    <label for="numSerie" class="col-form-label label_cabecalho">Numero de série</label> 
                                                
                                    <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;">
                                        
                                        <template #content v-if="v$.maquina.numSerie.$error">
                                            <div v-html="apiListaErros(v$.maquina.numSerie.$errors)"></div>
                                        </template> 
                                    
                                        <input type="text"
                                            id="numSerie"
                                            class="form-control form-control-sm text-uppercase padraoDesc text-center"
                                            style="margin:0px;"
                                            maxlength="30"                                        
                                            ref="numSerie"  
                                            :class="{ error: v$.maquina.numSerie.$error}" v-model.trim="v$.maquina.numSerie.$model"
                                        > 
                                
                                    </Popper>   
                            
                            </div>   

                            <div class="row espacoEntreComponentes    "  v-if="habilitaHrTrabDia" > 
                            
                                <label for="hrTrabDia" class="col-form-label label_cabecalho">Horas trab. dia</label> 
                                            
                                <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;" >
                                    
                                    <template #content v-if="v$.maquina.hrTrabDia.$error">
                                        <div v-html="apiListaErros(v$.maquina.hrTrabDia.$errors)"></div>
                                    </template> 
                                
                                    <input type="text"
                                        id="hrTrabDia"
                                        class="form-control form-control-sm text-uppercase padraoCodigo text-center text-center "
                                        style="margin:0px;"
                                        maxlength="4"                                        
                                        ref="hrTrabDia"      
                                        v-maska data-maska="##"                              
                                        :class="{ error: v$.maquina.hrTrabDia.$error}" v-model.trim="v$.maquina.hrTrabDia.$model"
                                    > 
                            
                                </Popper>   
                            
                            </div>    
                            
                            

                    </div>    

                </div>
            </div>
        </div>

        <div class="row msg_rodape" v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo== 'mobile'"  style="margin-bottom:50px"  >

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
    <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes" :tipo="simNaoTipo"></SimNao>


</template>

<script> 

   import ApiMixin from '@/mixins/ApiMixin' 
   import { mapState } from 'vuex'    
   import useValidate from '@vuelidate/core'
   import { required, helpers , requiredIf} from '@vuelidate/validators'   
   import SimNao from '@/requires/SimNao.vue'
   import Popper from 'vue3-popper'

    export default {

       name: 'MaquinaComponent', 
       components: { SimNao,  Popper },
       setup: () => (
            { v$: useValidate() }
        ),
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
            tipoOperacao:'A'  ,
            tpMaquinaDesabilitado:false,
            cdMaquinaDesabilitado:false, 
            ladoMaq: [
                { "codigo": "U", "nome": "Unico" },
                { "codigo": "D", "nome": "Duplo" },  
                ],
            optAbertura: [
                { "codigo": "11"},
                { "codigo": "12"},
                { "codigo": "21"},
                { "codigo": "22"},
             
                ],
            cdTipoMaquina:'',
            tipoMaquina: [], 
            tipoMaquinaTemp: {    
                 codigo:'' ,
                 nome:  '' , 
            },

            habilitaNumFusos:false, 
            habilitaCodigoAbertura:false,
            habilitaNumSerie:false,
            habilitaLocalFisico:false,
            habilitaMqSSM:false,
            habilitaLado:false,
            habilitaHrTrabDia:false,   

            maquinaTemp: [],             
            maquina: {               
                 idfil: '',
                 codigo:'' ,
                 nome:  '' , 
                 numFusos: null,
                 rpm: null,
                 codigoAbertura: '',
                 numSerie: '',
                 localFisico: '',
                 mqSSM: '',
                 lado:  '',
                 titulo: 0,
                 hrTrabDia: null   
            },
            maquinaInicial: {               
                idfil: '',
                 codigo:'' ,
                 nome:  '' , 
                 numFusos: null,
                 rpm: null,
                 codigoAbertura: '',
                 numSerie: '',
                 localFisico: '',
                 mqSSM: '',
                 lado:  '',
                 titulo: 0,
                 hrTrabDia: null   


            },
            maquinaDAO: []
             
          }),
          validations: {
            cdTipoMaquina: { required: helpers.withMessage('Informe o tipo da maquina', 
            
                function(val) {
 
                            console.log('val')
                            console.log(val.length)

                            if(val=='00'){
                                this.apiDisplayMensagem("Informe o tipo de máquina.");
                                return false
                            }else{
                                return true

                            } 

                       
                    }              
            
                )} , 
            maquina: {
                     
                    codigo: { required: helpers.withMessage('Informe o código da maquina', required)} ,  
                    nome: { required: helpers.withMessage('Informe a descrição da maquina', required)} ,   
                    localFisico: { required: helpers.withMessage('Informe o local físico', required)} ,   
                    
                    
                    numSerie: { requiredIf: helpers.withMessage('Informe número de série',  requiredIf(function() {                        
                        return this.habilitaNumSerie                    
                    }) )}    , 

                    lado: { requiredIf: helpers.withMessage('Informe o lado',  requiredIf(function() {                        
                        return this.habilitaLado                
                    }) )}    , 

                    numFusos: { requiredIf: helpers.withMessage('Informe o número de fusos',  requiredIf(function() {                        
                        return this.habilitaNumFusos             
                    }) )}    , 

                    mqSSM: { requiredIf: helpers.withMessage('Informe o código da maquina SSM',  requiredIf(function() {                        
                        return this.habilitaMqSSM                    
                    
                    }) )}   , 

                    hrTrabDia: { requiredIf: helpers.withMessage('Informe as horas padrões trabalhadas por dia',  requiredIf(function() {                        
                        return this.habilitaHrTrabDia                  
                    
                    }) )}    ,

                    codigoAbertura: { requiredIf: helpers.withMessage('Informe a linha de abertura',  requiredIf(function() {                        
                        return this.habilitaCodigoAbertura                    
                    
                    }) )}      
            }

        },             
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

         /*
            volta() {
                    this.$router.back(1)
            }, 
            pesquisar(){                
                this.$router.push( { name: 'maquinapesquisa'} )
                console.log('')
            }
            ,*/

            confirmaAcao(resposta) {

                this.simNaoRetorno = resposta

                console.log('confirmaAcao');
                console.log(this.simNaoRetorno ); 
                console.log(this.acao); 

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
                        this.$router.push( { name: 'maquinapesquisa'} )
                    }
                    
                }

            }
           ,             
            configuraCampos(){

                if (this.cdTipoMaquina!=null){ 
                    if(this.cdTipoMaquina=='01'){    

                        this.habilitaNumFusos=false; 
                        this.habilitaCodigoAbertura=false; 
                        this.habilitaNumSerie=true; 
                        this.habilitaLocalFisico=true; 
                        this.habilitaMqSSM=false; 
                        this.habilitaLado=false; 
                        this.habilitaHrTrabDia=false;  
                    }

                    if(this.cdTipoMaquina=='02'){   

                        this.habilitaNumFusos=false; 
                        this.habilitaCodigoAbertura=true; 
                        this.habilitaNumSerie=true; 
                        this.habilitaLocalFisico=true; 
                        this.habilitaMqSSM=false; 
                        this.habilitaLado=false; 
                        this.habilitaHrTrabDia=true;  

                    }

                    // PAssador e Macaroqueira
                    if(this.cdTipoMaquina=='03' || this.cdTipoMaquina=='05' || this.cdTipoMaquina=='07' ||
                       this.cdTipoMaquina=='08' || this.cdTipoMaquina=='09' || this.cdTipoMaquina=='10'
                        ){   

                        this.habilitaNumFusos=false; 
                        this.habilitaCodigoAbertura=false; 
                        this.habilitaNumSerie=false; 
                        this.habilitaLocalFisico=false; 
                        this.habilitaMqSSM=false; 
                        this.habilitaLado=false; 
                        this.habilitaHrTrabDia=false;   

                    }


                    // CONICALEIRA
                    if(this.cdTipoMaquina=='04' ){   

                        this.habilitaNumFusos=true;                         
                        this.habilitaCodigoAbertura=false;  
                        this.habilitaNumSerie=true; 
                        this.habilitaLocalFisico=true;                         
                        this.habilitaMqSSM=false;  
                        this.habilitaLado=true; 
                        this.habilitaHrTrabDia=true;  

                    } 

                    // CONICALEIRA
                    if(this.cdTipoMaquina=='06' ){   

                        this.habilitaNumFusos=true; 
                        this.habilitaCodigoAbertura=false; 
                        this.habilitaNumSerie=true; 
                        this.habilitaLocalFisico=true; 
                        this.habilitaMqSSM=false;  
                        this.habilitaLado=false;  
                        this.habilitaHrTrabDia=true;  

                    }                    


                    // SSM
                    if(this.cdTipoMaquina=='11' ){   

                        this.habilitaNumFusos=false; 
                        this.habilitaCodigoAbertura=false; 
                        this.habilitaNumSerie=true; 
                        this.habilitaLocalFisico=true; 
                        this.habilitaMqSSM=true; 
                        this.habilitaLado=false; 
                        this.habilitaHrTrabDia=true;  

                    }   

                 }else{

                        this.habilitaNumFusos=false; 
                        this.habilitaCodigoAbertura=false; 
                        this.habilitaNumSerie=false; 
                        this.habilitaLocalFisico=false; 
                        this.habilitaMqSSM=false; 
                        this.habilitaLado=false; 
                        this.habilitaHrTrabDia=false;   
                    
                 }
            }
            ,
            async buscaByCodigo(){ 

                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = ''     

                if (this.maquina.codigo!='' && this.maquina.codigo!=null && this.cdTipoMaquina!=null && this.cdTipoMaquina!="" ){


                    this.maquina.codigo = this.maquina.codigo.padStart(6, '0');

                    console.log('this.maquina.codigo');
                    console.log(this.maquina.codigo); // Saída: "0000012345"                                 
 

                            this.cdTipoMaquina          = this.maquina.codigo.substring(2,4);  

                           if(this.maquina.codigo.substring(2,4) != this.cdTipoMaquina ){  
                                this.apiDisplayMensagem("Maquina " + this.maquina.codigo.trim() + " nao corresponde ao tipo de máquina.");
                                this.maquina.codigo ="";           

                            }else{ 
      
                                if(this.cdTipoMaquina!='00'){

                                    const resposta = await this.populaForm();     

                                    if (!(resposta === true) ){
                                        console.log('Erro de cadastro BuscaChave' );      
                                    } 

                                }else{
                                    this.apiDisplayMensagem("Informe o tipo de máquina.");

                                }


                            }
 

                }else{ 

                                this.apiDisplayMensagem("Informe o tipo de maquina e o código da maquina." );
                                this.maquina.codigo ="";                                
                                //this.$refs.codigoMaquina.focus();   
                }


            },        

            async exclusao() { 
                
                /// EXCLUSAO ////

                let url = `${process.env.VUE_APP_BASE_URL}/maquina/filial/${this.$store.state.usuarioSistema.idfil}/codigo/${this.maquina.codigo}`  
                console.log(url);
                if (this.tipoOperacao == 'E' && this.simNaoRetorno == 'S') {  
                        /*
                        await this.axios.delete(
                            url,
                            JSON.stringify(this.maquinaDAO),
                            //{
                            //headers: { "Content-Type": "application/json" }
                            //}
                            this.apiTokenHeader({ "Content-Type": "application/json" })
                        )
                        */
                        this.axios.delete(url,this.apiTokenHeader() )
                        .then(response => {                            
                            this.resetarForm();
                            this.apiDisplayMensagemSucesso('Código ' + response.data  + ' excluido com sucesso.'  )
                            console.log(this.mensagemSucesso);
                        })
                        .catch(error => {
                            console.log("Erro: ", error.response.data);
                            //this.haErros = true
                            //this.mensagemErro = error.response.data
                            this.apiDisplayMensagem(error.response.data);
                        }); 

                    }


            },
            async submitForm() {   

                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = '' 


                if(this.cdTipoMaquina=='00'){
                    this.apiDisplayMensagem("Informe o tipo de máquina."); 
                }else{    
                        const isFormCorrect = await this.v$.$validate()  

                        if (isFormCorrect) {

                            let url = `${process.env.VUE_APP_BASE_URL}/maquina`

                            this.maquinaDAO =
                            {
                                "idfil":         this.$store.state.usuarioSistema.idfil,
                                "codigo":        this.maquina.codigo ,
                                "nome":          this.maquina.nome,
                                "localFisico":   this.maquina.localFisico,
                                "numSerie":      this.maquina.numSerie,   
                                "numFusos":      this.maquina.numFusos,       
                                "rpm":           this.maquina.rpm,            
                                "codigoAbertura":this.maquina.codigoAbertura ,  
                                "mqSSM":         this.maquina.mqSSM,          
                                "lado":          this.maquina.lado,          
                                "titulo":        this.maquina.titulo,         
                                "hrTrabDia":     this.maquina.hrTrabDia    
                            } 
                            if (this.tipoOperacao=="I") {  
                                
                                await this.axios.post(
                                        url,
                                        JSON.stringify(this.maquinaDAO),
                                        this.apiTokenHeader({ "Content-Type": "application/json" })
                                    )
                                    .then(response => {
                                        //this.haSucesso = true 
                                        //this.mensagemSucesso = 'Código ' + response.data  + ' inserido com sucesso.'  

                                        this.apiDisplayMensagemSucesso('Código ' + response.data  + ' inserido com sucesso.'  )
                                        this.maquina.codigo = response.data; ////JSON.stringify(response.data);  
                                        this.tipoOperacao = 'A';
                                    
                                    })
                                    .catch(error => {
                                        console.log("Erro: ", error.response.data);
                                        //this.haErros = true
                                        //this.mensagemErro = error.response.data
                                        this.apiDisplayMensagem(error.response.data);
                                    }); 

                            

                            } else {

                                        if (this.tipoOperacao == 'A'   ) { 

                                            await this.axios.put(
                                                    url,
                                                    JSON.stringify(this.maquinaDAO),
                                                    this.apiTokenHeader({ "Content-Type": "application/json" })
                                                )
                                                .then(response => { 

                                                    //this.haSucesso = true 
                                                
                                                    this.apiDisplayMensagemSucesso('Código ' + response.data  + ' alterado com sucesso.'  )

                                                
                                                })
                                                .catch(error => { 
                                                    console.log("Erro: ", error.response.data);
                                                    //this.haErros = true
                                                   // this.mensagemErro = error.response.data
                                                    this.apiDisplayMensagem(error.response.data);
                                                });

                                        }  

                                    }

                        } else {
                                return
                        }
                }        
            },

            
            resetarForm(){

                console.log('')  

                if(this.simNaoRetorno == 'S'){

                    this.maquina = Object.assign({},this.maquinaInicial); 
                    this.v$.$reset(); 
                    this.ehInclusao = true; 
                    this.erros= '';
                    this.mensagemSucesso= '';
                    this. mensagemErro= ''; 
                    this.haErros= false;      
                    this.haSucesso= false;
                    this.tipoOperacao = 'I';  
                    this.cdAbertura="";
                    this.cdLado=""; 

                    this.tpMaquinaDesabilitado = false;
                    this.cdMaquinaDesabilitado = false; 
                    
                    this.cdTipoMaquina = "" ;
                    this.$refs.tpMaquina.focus();   

                    this.habilitaNumFusos=false; 
                    this.habilitaCodigoAbertura=false; 
                    this.habilitaNumSerie=false; 
                    this.habilitaLocalFisico=false; 
                    this.habilitaMqSSM=false; 
                    this.habilitaLado=false; 
                    this.habilitaHrTrabDia=false;   


                }  

            }

            ,  

            async populaForm(){   

                let retornoPopForm=false;  
                this.resultado = "";
                if (this.maquina.codigo.trim().length >0){

                    if(this.maquina.codigo.trim().length == 1){
                         this.maquina.codigo  = '0' + this.maquina.codigo.trim();
                    }
 
                    let url = `${process.env.VUE_APP_BASE_URL}/maquina/filial/${this.$store.state.usuarioSistema.idfil}/maquinaf/${this.maquina.codigo}`;
                
                    //console.log(url)  

                    await this.axios.get(url,this.apiTokenHeader())
                    .then(response => {        

                            console.log("PopulaForm"); 

                            this.resultado = response.data;    

                            this.cdTipoMaquina          = this.maquina.codigo.substring(2,4);

                            if (this.resultado.nome != null){
                                this.maquina.nome = this.resultado.nome.trim() ;     
                            
                            }else{
                                this.maquina.nome       = "" ;                       
                            }    

                            if (this.resultado.numFusos != null){
                                this.maquina.numFusos = this.resultado.numFusos ;
                            
                            }else{
                                this.maquina.numFusos       = 0 ;                       
                            } 
                            

                            if (this.resultado.rpm != null){
                                this.maquina.rpm = this.resultado.rpm ;
                            
                            }else{
                                this.maquina.rpm       = 0 ;                       
                            } 
                            
                            if (this.resultado.codigoAbertura != null){
                                this.maquina.codigoAbertura = this.resultado.codigoAbertura ;
                            
                            }else{
                                this.maquina.codigoAbertura       = "" ;                       
                            }
                            
                            if (this.resultado.numSerie != null){
                                this.maquina.numSerie       = this.resultado.numSerie.trim() ;
                            }else{
                                this.maquina.numSerie       = '' ;
                            }

                            if (this.resultado.localFisico != null){
                                this.maquina.localFisico       = this.resultado.localFisico.trim() ;
                            }else{
                                this.maquina.localFisico       = ''   ;
                            }

                            if (this.resultado.mqSSM != null){
                                this.maquina.mqSSM       = this.resultado.mqSSM.trim() ;
                            }else{
                                this.maquina.mqSSM       = '' ;
                            }

                            if (this.resultado.lado != null){
                                this.maquina.lado       = this.resultado.lado.trim() ;
                        
                            }else{
                                this.maquina.lado       = '' ;                        
                            }
                    
                            this.maquina.titulo         = this.resultado.titulo;
                            this.maquina.hrTrabDia      = this.resultado.hrTrabDia  ;   

                            this.configuraCampos(); 

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
                         
                            console.log("Erro: ", error);
                           // this.mensagemErro = error; 
                            //this.haErros = true ;

                            this.apiDisplayMensagem(error.response.data );
                            retornoPopForm = false;   
                    }  
                    );

                } 

                this.tpMaquinaDesabilitado = true;
                this.cdMaquinaDesabilitado = true; 

                return retornoPopForm  ;   

            } ,
            navegarParaLogin(){this.$router.push({name:'login'  })}   
        } , 

        async created(){    

            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            }  

            this.populaTipoMaquina(); 

            if(this.operacao=='A'){
                this.tipoOperacao = 'A' 
            }else if(this.operacao=='I'){
                this.tipoOperacao = 'I'  
            }else if(this.operacao=='E'){
                this.tipoOperacao = 'E'  
            } 

            if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){                   
                this.maquina.codigo = this.codigo ; 

                const resposta = await this.populaForm();     

                if (!(resposta === true) ){
                    console.log('Erro de cadastro BuscaChave' );      
                } 
                
            }  

            },
        mounted(){
            if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){  
            this.$refs.nomeMaquina.focus();   
            } else{ 
        
            this.cdTipoMaquina = "" ;
            this.$refs.tpMaquina.focus();  
            }  
        }
           


   }

   </script>
 