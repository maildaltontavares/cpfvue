<template>
    
    <form @submit.stop.prevent="submitForm"  >  

        <div>  
            <div class="principal cinzaClaro">
                <p class="card-header text-center" style="font-size: 30px; margin-bottom: 80px; margin-top: 2%;color: blue; font-weight: bold;">Lote de Fiação</p>
            </div>    
        </div> 


        <div class="flex-container ">    
             <div class="divCentral  ">     
                <div class="divForm " >   

                    <div class="flex-linha"> 
                        
                        <div class="row  espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="descMaquina" class="col-form-label  label_cabecalho">Tipo de Maquina</label>
                                <select class="form-select  padraoCombo" 
                                      ref="tpMaquina"
                                      :disabled="tpMaquinaDesabilitado"   
                                      @blur="buscaByCodigo" 
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

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="lote" class="col-form-label label_cabecalho">Lote</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <template #content v-if="v$.loteFiacao.lote.$error">
                                            <div v-html="apiListaErros(v$.loteFiacao.lote.$errors)"></div>
                                        </template>   

                                        <money3 class="form-control text-end form-control-sm" style="margin:0px;"
                                            id="lote"
                                            @blur="buscaByCodigo()"
                                            :disabled="loteDesabilitado"
                                            ref="lote"   
                                            :class="{ error: v$.loteFiacao.lote.$error}" v-model.lazy="v$.loteFiacao.lote.$model" v-bind="config_sd">  
                                        </money3>     
                                       
                                    </Popper>  
                                  

                        </div> 

                    </div>  
                    <div class="flex-linha">                      
                         <div class="row espacoEntreComponentes"  >  
                                    <div class=" text-start">
                                        <label for="item" class="col-form-label  label_cabecalho">Item</label>
                                        <div class="input-group"> 

                                            <div class="externoCampoConjugado" > 
                                                    <div class="frontCampoConjugado"> 
                                                        <!--<input type="text" class="texto21 form-control form-control-sm text-center">   -->

                                                        <Popper arrow hover class="dark  ">
                                                                
                                                                <template #content v-if="v$.loteFiacao.item.$error">
                                                                    <div v-html="apiListaErros(v$.loteFiacao.item.$errors)"></div>
                                                                </template> 

                                                                <money3 class="form-control text-end form-control-sm"  
                                                                    id="item"
                                                                    :disabled="itemDesabilitado"
                                                                    @blur="buscaByCodigo"                                                                   
                                                                    :class="{ error: v$.loteFiacao.item.$error}" v-model.lazy="v$.loteFiacao.item.$model" v-bind="config_sd">  
                                                                </money3> 
                                                            </Popper>   

                                                    </div> 
                                                

                                                    <div class="botaoPesquisa">  
                                                       <!-- <button type="button" class="btn btn-sm btn-primary bi-search input-group-append" :disabled="itemDesabilitado"></button> -->
                                                        <button type="button" class="btn btn-sm btn-primary bi-search input-group-append" data-bs-toggle="modal"
                                                               data-bs-target="#modalPesquisaItem" tabindex="-1"  @click="apiFlushPesquisa" :disabled="itemDesabilitado">
                                                        </button>


                                                    </div>           

                                                    <div class="backCampoConjugado">   
                                                       <!-- <input type="text" class="limitadorMedia form-control form-control-sm text-center" disabled >  -->
                                                        <input type="text" class="form-control form-control-sm"
                                                        :class="{ error: v$.loteFiacao.dsItem.$error }" 
                                                        v-model.trim="v$.loteFiacao.dsItem.$model"
                                                        ref="item_nome" disabled>   
                                                    </div>  

                                            </div>  

                                        </div>
                                    </div> 
                            </div> 
                    </div> 



                      <!--  FIM LINHA 0001 -->    
                      <div class="div-box ">
                          <p>Dados de Produção</p>
                    </div> 

                    <div class="flex-linha">         
                            <div class="row espacoEntreComponentes   "  style="width:230px;"   > 
                                
                                <label for="dataAbertura" class="col-form-label label_cabecalho">Data da Abertura</label> 
                                            
                                <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  > 

                                    <template #content v-if="v$.loteFiacao.dataAbertura.$error">
                                        <div v-html="apiListaErros(v$.loteFiacao.dataAbertura.$errors)"></div>
                                    </template>                                 
                                
                                    <input type="Date"
                                        id="dataAbertura"
                                        class="form-control form-control-sm   text-center "
                                        style="margin:0px;width:180px"                                                                     
                                        ref="dataProducao"  
                                        @blur="buscaByChave"
                                        :disabled="dataAberturaDesabilitado" 
                                        :class="{ error: v$.loteFiacao.dataAbertura.$error}" v-model="v$.loteFiacao.dataAbertura.$model"
                                    > 

                                </Popper>   

                            </div>   
                     

                            <div class="row espacoEntreComponentes  "  style="width:200px;"   > 
                                        
                                        <label for="qtdeAProduzir" class="col-form-label label_cabecalho">Qtde. a Produzir</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.loteFiacao.qtdeAProduzir.$error">
                                                <div v-html="apiListaErros(v$.loteFiacao.qtdeAProduzir.$errors)"></div>
                                            </template> 

                                            <money3 class="form-control text-end form-control-sm"
                                            :class="{ error: v$.loteFiacao.qtdeAProduzir.$error}" v-model="v$.loteFiacao.qtdeAProduzir.$model" v-bind="config"  >
                                            </money3>

                                        </Popper>   

                            </div> 
                    </div>

                    <div class="flex-linha">         
                        <div class="row espacoEntreComponentes   "  style="width:230px;"   > 
                                
                                <label for="dataEncerramento" class="col-form-label label_cabecalho">Data de Encerramento</label> 
                                            
                                <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  > 

                                    <template #content v-if="v$.loteFiacao.dataEncerramento.$error">
                                        <div v-html="apiListaErros(v$.loteFiacao.dataEncerramento.$errors)"></div>
                                    </template>                                 
                                
                                    <input type="Date"
                                        id="dataEncerramento"
                                        class="form-control form-control-sm   text-center "
                                        style="margin:0px;width:180px"                                                                     
                                        ref="dataEncerramento"  
                                        @blur="buscaByChave"
                                        :disabled="dataEncerramentoDesabilitado" 
                                        :class="{ error: v$.loteFiacao.dataEncerramento.$error}" v-model="v$.loteFiacao.dataEncerramento.$model"
                                    > 

                                </Popper>   

                            </div>   
                    </div>  
                    <div class="flex-linha">    
                        <div class="row espacoEntreComponentes  "  style="width:430px;"    > 
                            <div class=" text-start">
                                <label for="obs" class="col-form-label  label_cabecalho">Observação</label>
                                <div class="input-group">                 
                                    
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  > 

                                        <template #content v-if="v$.loteFiacao.obs.$error">
                                            <div v-html="apiListaErros(v$.loteFiacao.obs.$errors)"></div>
                                        </template>                                      

                                        <input   id="obs" ref="obs" 
                                        class="form-control form-control-sm   text-center "
                                        style="margin:0px;width:300px"   
                                        :class="{ error: v$.loteFiacao.obs.$error}" v-model="v$.loteFiacao.obs.$model">

                                    </Popper>  
                                </div>
                            </div> 
                         </div>  
                    </div>       
                    
                    <div class="flex-linha">    
                        <div class="row espacoEntreComponentes  "  style="width:430px;"    > 
                            <div class=" text-start">
                             
                                <div class="input-group">                 
                                    
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  > 

                                        <template #content v-if="v$.loteFiacao.obs1.$error">
                                            <div v-html="apiListaErros(v$.loteFiacao.obs1.$errors)"></div>
                                        </template>                                      

                                        <input   id="obs" ref="obs" 
                                        class="form-control form-control-sm   text-center "
                                        style="margin:0px;width:300px"   
                                        :class="{ error: v$.loteFiacao.obs1.$error}" v-model="v$.loteFiacao.obs1.$model">

                                    </Popper>  
                                </div>
                            </div> 
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
    <PesquisaItem @setaPesquisa="setaPesquisa($event)"></PesquisaItem>
    <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes" :tipo="simNaoTipo"></SimNao>


</template>

<script> 

   import ApiMixin from '@/mixins/ApiMixin' 
   import { mapState } from 'vuex'    
   import useValidate from '@vuelidate/core'
   import { required, helpers  } from '@vuelidate/validators'   
   import SimNao from '@/requires/SimNao.vue'
   import Popper from 'vue3-popper'
   import PesquisaItem from '@/requires/PesquisaItem.vue';   

    export default {

       name: 'LoteFiacaoComponent', 
       components: { SimNao,  Popper ,PesquisaItem},
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
            cdTipoMaquina:'', 
    
            tipoMaquina: [], 
            tipoMaquinaTemp: {    
                 codigo:'' ,
                 nome:  '' , 
            },
            loteFiacao:{

                idfil:'',
                tipoMaquina:'',
                item:'',
                idSSM:0,
                lote:'',
                dataAbertura:'',
                dataEncerramento:'',
                qtdeAProduzir:0,
                dataInsercao:'',
                usuarioInsercao:'',
                obs:'',
                obs1:'',
                obs2:'',
            },
            loteFiacaoInicial:{

                idfil:'',
                tipoMaquina:'',
                item:'',
                dsItem:'',
                idSSM:0,
                lote:'',
                dataAbertura:'',
                dataEncerramento:'',
                qtdeAProduzir:0,
                obs:'',
                obs1:'',
                obs2:'',

            },

            tpMaquinaDesabilitado:false,
            itemDesabilitado:false,
            idSSMDesabilitado:false,
            loteDesabilitado:false,
            dataAberturaDesabilitado:false,
            dataEncerramentoDesabilitado:false,
            qtdeAProduzirDesabilitado :false,
            loteFiacaoDAO: [],
            liber:''
             
          }),
          validations: {
            cdTipoMaquina: { required: helpers.withMessage('Informe o tipo da maquina', 
            
                function(val) {
 
                           //.log('val')
                            //console.log(val.length)

                            if(val=='00'){
                                this.apiDisplayMensagem("Informe o tipo de máquina.");
                                return false
                            }else{
                                return true

                            } 

                       
                    }              
            
                )} ,  
          
          
            loteFiacao: {
                     
                    item: { required: helpers.withMessage('Informe o item', 
                    
                    
                        function(val) {

                            this.liber = val;

                            if (this.cdTipoMaquina=='00' || this.cdTipoMaquina=='' ){  
                                return true
                            }else 
                            {
                                if(val==0){
                                    return false
                                }else{
                                    return true

                                } 

                            }
                        }                    
                    
                    
                    
                    )} ,   
                    dsItem: { required: helpers.withMessage('Nome do item inválido.', required)} , 

                    obs: { required: helpers.withMessage('Informe a observação.',
                        function(val) { 
                            this.liber = val; 
                            return true
                        } 
                    )} , 

                    obs1 : { required: helpers.withMessage('Informe a observação.',
                        function(val) { 
                            this.liber = val; 
                            return true
                        } 
                    )} ,    

                    obs2 : { required: helpers.withMessage('Informe a observação.',
                        function(val) { 
                            this.liber = val; 
                            return true
                        } 
                    )} , 

                     


                    lote: { required: helpers.withMessage('Informe o lote.', 
                    
                                function(val) {

                                    this.liber = val;

                                    if (this.cdTipoMaquina=='00' || this.cdTipoMaquina=='' ){  
                                        return true
                                    }else 
                                    {
                                        if(val==0){
                                            return false
                                        }else{
                                            return true

                                        } 

                                    }
                               }                      
                    
                    
                    
                    )} , 
                    dataAbertura: { required: helpers.withMessage('Informe a data de abertura.', required)} , 
                    qtdeAProduzir: { required: helpers.withMessage('Informe a quantidade a produzir.', 
                    
                            function(val) {

                                this.liber = val;

                                if (this.cdTipoMaquina=='00' || this.cdTipoMaquina=='' ){  
                                    return true
                                }else 
                                {
                                    if(val==0){
                                        return false
                                    }else{
                                        return true

                                    } 

                                }
                            }                       
                    
                    
                    
                    )} ,
                    dataEncerramento: { required: helpers.withMessage('Informe a data de encerramento', 
                    
                            function(val) { 
                                   this.liber = val; 
                                   return true 
                            }                         
                    
                    )}  
            }

        },             
        computed: {...mapState(['usuarioSistema']) } ,      

        props: {
 
            tipoMaquinaProps: {
            type: String,
            required: true,
            }, 
            loteprops : {
            type: String,
            required: true,
            },
            itemprops: {
            type: String,
            required: true,
            },                  
            operacao: {
            type : String,
            required: true,
            },
        },  
        
       methods:{     
            

            async validaChave(){ 

                        let chaveCompleta = true; 
                        //console.log('chaveCompleta')

                        if ((this.cdTipoMaquina==null || this.cdTipoMaquina =='' || this.cdTipoMaquina =='00') && chaveCompleta){  
                            chaveCompleta = false; 
                        } 

                        //console.log(chaveCompleta)

                        if  ((this.loteFiacao.lote!='0'  )){
                            this.loteFiacao.lote = this.loteFiacao.lote.padStart(10, '0'); 
                        }else{
                            chaveCompleta = false;
                        } 
                        //console.log(this.loteFiacao.lote)
                        //console.log(chaveCompleta)

                        if  (this.loteFiacao.item!='0'   ){
                            this.loteFiacao.item = this.loteFiacao.item.padStart(7, '0');
                            const descIt = await this.apiPesquisaParam('item', this.loteFiacao.item, this.loteFiacao)  
                            this.liber = descIt
                        }else{
                            chaveCompleta = false;
                        }   
                        //console.log(this.loteFiacao.item)
                        //console.log(chaveCompleta)
                   
                        //console.log(chaveCompleta)
                        return chaveCompleta;
            },            



            setaPesquisa(e) {  

                if (e.tipo == "item") {
                    this.loteFiacao.item=  e.obj.codigo;
                    this.loteFiacao.dsItem = e.obj.material.descricao;
                } 


            },              

            confirmaAcao(resposta) {

                this.simNaoRetorno = resposta

                //console.log('confirmaAcao');
                //console.log(this.simNaoRetorno ); 
                //console.log(this.acao); 

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
                        this.$router.push( { name: 'lotefiacaopesquisa'} )
                    }
                    
                }

            }
           ,             
            configuraCampos(oper){ 


                if(oper=='I'){

                    this.tpMaquinaDesabilitado=false;
                    this.itemDesabilitado=false; 
                    this.loteDesabilitado=false;       

                }else if(oper=='A'){

                    this.tpMaquinaDesabilitado=true;
                    this.itemDesabilitado=true; 
                    this.loteDesabilitado=true;  

                }else if(oper=='Resetar'){

                    this.tpMaquinaDesabilitado=false;
                    this.itemDesabilitado=false; 
                    this.loteDesabilitado=false;    

                    
                }else if(oper=='E'){

                    this.tpMaquinaDesabilitado=true;
                    this.itemDesabilitado=true; 
                    this.loteDesabilitado=true;  

                }



            }
            ,
            async buscaByCodigo(){ 

                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = ''     
 
                if (await this.validaChave ()){   

                        const resposta = await this.populaForm();     

                        if (!(resposta === true) ){
                            console.log('Erro de cadastro BuscaChave' );      
                        }  

                }            

            },        

            async exclusao() { 
                
                /// EXCLUSAO ////
                console.log('EXCLUSAO');
 
                let url = `${process.env.VUE_APP_BASE_URL}/lotefiacao/filial/${this.$store.state.usuarioSistema.idfil}/tipo/${this.cdTipoMaquina}/lote/${this.loteFiacao.lote}/item/${this.loteFiacao.item}`  
            
                if (this.tipoOperacao == 'E' && this.simNaoRetorno == 'S') {  

                    this.axios.delete(url,this.apiTokenHeader() )
                        .then(response => {                            
                            this.resetarForm();
                            this.apiDisplayMensagemSucesso('Código ' + response.data  + ' excluido com sucesso.'  )
                            console.log(this.mensagemSucesso);
                        })
                        .catch(error => {
                            console.log("Erro: ", error.response.data.message);
                            //this.haErros = true
                            //this.mensagemErro = error.response.data.message
                            this.apiDisplayMensagem(error.response.data.message);
                        }); 

                    }
 

            },
            async submitForm() {    

                let dataInsercao;
                let dataEncerramento;
               

                let dataAtual = new Date();
                let dia = String(dataAtual.getDate()).padStart(2, '0');
                let mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // O mês é baseado em zero, portanto, é necessário adicionar 1
                let ano = dataAtual.getFullYear();
                let dataFormatada = `${dia}/${mes}/${ano}`;

                //console.log(dataFormatada);
                //console.log(this.loteFiacao.dataInsercao);
                //console.log(this.loteFiacao.dataEncerramento);

                if(this.tipoOperacao=="I"){
                     dataInsercao = dataFormatada;
                     this.loteFiacao.dataInsercao = this.$moment(dataAtual).format("DD/MM/YYYY") 
                     this.loteFiacao.usuarioInsercao= this.$store.state.usuarioSistema.codigo;
                }else{
                        if (typeof this.loteFiacao.dataInsercao  === "string") {
                            dataInsercao  = this.loteFiacao.dataInsercao ;
                        } else if (this.loteFiacao.dataInsercao  instanceof Date) {
                            dataInsercao  = this.$moment(this.loteFiacao.dataInsercao).format("DD/MM/YYYY")  
                        } 
                }

                if(this.loteFiacao.dataEncerramento=='' || this.loteFiacao.dataEncerramento==null){
                    dataEncerramento = ''
                }else{
                    dataEncerramento = this.$moment(this.loteFiacao.dataEncerramento).format("DD/MM/YYYY")
                }

                //console.log(this.loteFiacao.dataInsercao);

                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = '' 

                const isFormCorrect = await this.v$.$validate()  
                if( isFormCorrect  ){ 

                        if (await this.validaChave()) {

                            let url = `${process.env.VUE_APP_BASE_URL}/lotefiacao`
                            //console.log(url) 

                            this.loteFiacaoDAO =
                            {
                                "idfil":        this.$store.state.usuarioSistema.idfil,
                                "tipoMaquina":  this.cdTipoMaquina,
                                "item":         this.loteFiacao.item ,
                                "idSSM":        this.loteFiacao.idSSM ,
                                "lote":         this.loteFiacao.lote ,
                                "dataAbertura": this.$moment(this.loteFiacao.dataAbertura).format("DD/MM/YYYY"),
                                "dataEncerramento": dataEncerramento,
                                "qtdeAProduzir": this.loteFiacao.qtdeAProduzir ,
                                "dataInsercao":  dataInsercao ,
                                "usuarioInsercao" : this.loteFiacao.usuarioInsercao,
                                "obs":this.loteFiacao.obs,
                                "obs1":this.loteFiacao.obs1 
                             
                            } 

                            //console.log('this.loteFiacaoDAO' + ' UPD 999' ) 
                            //console.log(this.loteFiacaoDAO ) 
                            if (this.tipoOperacao=="I") {  
                                
                                await this.axios.post(
                                        url,
                                        JSON.stringify(this.loteFiacaoDAO),
                                        this.apiTokenHeader({ "Content-Type": "application/json" })
                                    )
                                    .then(response => { 

                                        this.apiDisplayMensagemSucesso('Código ' + response.data  + ' inserido com sucesso.'  )                                      
                                        this.configuraCampos('A' )   
                                        this.tipoOperacao = 'A';
                                    
                                    })
                                    .catch(error => {
                                        console.log("Erro: ", error.response.data.message);
                                        //this.haErros = true
                                        //this.mensagemErro = error.response.data.message
                                        this.apiDisplayMensagem(error.response.data.message);
                                    }); 

                            

                            } else {

                                        if (this.tipoOperacao == 'A'   ) { 

                                            await this.axios.put(
                                                    url,
                                                    JSON.stringify(this.loteFiacaoDAO),
                                                    this.apiTokenHeader({ "Content-Type": "application/json" })
                                                )
                                                .then(response => {  
                                                    this.apiDisplayMensagemSucesso('Código ' + response.data  + ' alterado com sucesso.'  ) 
                                                })
                                                .catch(error => { 
                                                    console.log("Erro: ", error.response.data.message);                                                    
                                                    this.apiDisplayMensagem(error.response.data.message);
                                                });

                                        }  

                                    }


                        } else {
                                return
                        }
                        
                }        

            },

            
            resetarForm(){

                //console.log('')  
 
                if(this.simNaoRetorno == 'S'){

                    this.loteFiacao = Object.assign({},this.loteFiacaoInicial); 
                    this.v$.$reset(); 
                    this.ehInclusao = true; 
                    this.erros= '';
                    this.mensagemSucesso= '';
                    this. mensagemErro= ''; 
                    this.haErros= false;      
                    this.haSucesso= false;
                    this.tipoOperacao = 'I';   

                    this.tpMaquinaDesabilitado = false;
                    this.cdMaquinaDesabilitado = false; 
                    
                    this.cdTipoMaquina = "" ; 
                         
                    this.itemDesabilitado=false;
                    this.idSSMDesabilitado=false;
                    this.loteDesabilitado=false;
                    this.dataAberturaDesabilitado=false;
                    this.dataEncerramentoDesabilitado=false;
                    this.qtdeAProduzirDesabilitado =false;

                    this.configuraCampos('Resetar' )


                }  

               

            }

            ,  

            async populaForm(){   

 
                let retornoPopForm=false;   
                this.resultado = "";
                if (await this.validaChave()){ 

                    let url = `${process.env.VUE_APP_BASE_URL}/lotefiacao/buscaLotePorChave`;

                    //console.log(url)  ;
               

                    if  (!(this.loteFiacao.lote==null || this.loteFiacao.lote=='')){ 


                            this.loteFiacao.item = this.loteFiacao.item.padStart(7, '0'); 
                            this.loteFiacao.lote = this.loteFiacao.lote.padStart(10, '0');  

                            this.loteFiacaoDAO =  
                            {    
                            idfil:this.$store.state.usuarioSistema.idfil ,
                            tipoMaquina:  this.cdTipoMaquina ,   
                            item: this.loteFiacao.item,
                            idSSM: 0,
                            lote:this.loteFiacao.lote
                            },   

                           //console.log('populaform loteFiacaoDAO');  
                            //console.log(this.loteFiacaoDAO);   


                            await this.axios.post( 
                                url,
                                JSON.stringify(this.loteFiacaoDAO),
                                this.apiTokenHeader({ "Content-Type": "application/json" })
                            ) 
                            .then(response => {         

                                    this.resultado = response.data;  

                                    //console.log("PopulaForm xxxx"); 
                                    //console.log(this.resultado);     

                                    if (this.resultado.dataAbertura != null){   
                                        this.loteFiacao.dataAbertura = this.resultado.dataAbertura.split('/').reverse().join('-');      
                                    }else{
                                        this.loteFiacao.dataAbertura       = "" ;                       
                                    }  
                                    
                                    if (this.resultado.dataEncerramento != null){  
                                       
                                        this.loteFiacao.dataEncerramento = this.resultado.dataEncerramento.split('/').reverse().join('-');   
                                    }else{
                                        this.loteFiacao.dataEncerramento       = "" ;                       
                                    }          
                                    
                                    if (this.resultado.qtdeAProduzir != null){  
                                        this.loteFiacao.qtdeAProduzir = this.resultado.qtdeAProduzir;   
                                    }else{
                                        this.loteFiacao.qtdeAProduzir       = "" ;                       
                                    }        
                                    
                                    if (this.resultado.obs != null){                                         
                                       this.loteFiacao.obs = this.resultado.obs;   
                                   }else{
                                       this.loteFiacao.obs       = "" ;                       
                                   } 
                                   
                                   if (this.resultado.obs1 != null){                                         
                                       this.loteFiacao.obs1 = this.resultado.obs1;   
                                   }else{
                                       this.loteFiacao.obs1       = "" ;                       
                                   }  

                                   if (this.resultado.dataInsercao != null){                                         
                                       this.loteFiacao.dataInsercao = this.resultado.dataInsercao;   
                                   }else{
                                       this.loteFiacao.dataInsercao       = "" ;                       
                                   } 
                     
                                   if (this.resultado.usuarioInsercao != null){                                         
                                       this.loteFiacao.usuarioInsercao = this.resultado.usuarioInsercao;   
                                   }else{
                                       this.loteFiacao.usuarioInsercao       = "" ;                       
                                   }   

                                   if(this.resultado!=''){   
                                        this.configuraCampos('A' )  ; 
                                   }   

                                   if(this.tipoOperacao == 'I' &&  this.resultado!='' ){  
                                        this.tipoOperacao = 'A';  
                                   }  
                        

                                    this.tpMaquinaDesabilitado=true;
                                    this.itemDesabilitado=true; 
                                    this.loteDesabilitado=true; 


                                    //this.apiPesquisaParam('item', this.loteFiacao.item, this.loteFiacao)  
                              
                            
                                    retornoPopForm = true;   

                            })
                            .catch(error => {  
                                
                                    console.log("Erro: ", error);
                                // this.mensagemErro = error; 
                                    //this.haErros = true ;

                                    this.apiDisplayMensagem(error );
                                    retornoPopForm = false;   
                            }  
                            );

                } 

                this.tpMaquinaDesabilitado = true; 
                return retornoPopForm  ;   

            }
        } ,

            navegarParaLogin(){this.$router.push({name:'login'  })}   
        } , 

        async created(){    

            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            }  

            this.populaTipoMaquina(); 


            //console.log('Created' );    

            if(this.operacao=='A'){
                this.tipoOperacao = 'A' 
            }else if(this.operacao=='I'){
                this.tipoOperacao = 'I'  
            }else if(this.operacao=='E'){
                this.tipoOperacao = 'E'  
            }  

            if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){                   
                
                this.loteFiacao.item = this.itemprops;
                this.loteFiacao.lote = this.loteprops;
                this.cdTipoMaquina = this.tipoMaquinaProps;
                this.loteFiacao.tipoMaquina = this.tipoMaquinaProps; 

                const resposta = await this.populaForm();     

                if (!(resposta === true) ){
                    console.log('Erro de cadastro BuscaChave' );      
                } 
                
            }  

            },
        mounted(){
            console.log('Mounted' );    

        }
           


   }

   </script>
 