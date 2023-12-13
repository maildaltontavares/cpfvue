<template>
    
    <form  @submit.stop.prevent="submitForm" @reset.prevent="resetarForm($event)">  

        <div>  
            <div class="principal cinzaClaro">
                <p class="card-header text-center" style="font-size: 30px; margin-bottom: 80px; margin-top: 2%;color: blue; font-weight: bold;">Maquina</p>
            </div>    
        </div> 


        <div class="flex-container ">    
             <div class="divCentral">     
                <div class="divForm">   

                    <div class="flex-linha">

                        <div class="row  espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="descMaquina" class="col-form-label  label_cabecalho">Tipo de Maquina</label>
                                <select class="form-select  padraoCombo" aria-label="Default select example">
                                    <option value="" disabled>Selecione o tipo de maquina</option>
                                    <option value="01">Abertura</option>
                                    <option value="02">Carda</option>                                 
                                    <option value="03">Passador</option>   
                                    <option value="04">Open End</option>     
                                </select> 
                            </div> 
                        </div>   

                    </div> 

                    <!--  LINHA 001 -->

                    <div class="flex-linha">

                        <div class="row  espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="codigoMaquina" class="col-form-label  label_cabecalho">Código</label>
                                <div class="input-group">
                                    <div class="col-md-1">
                                        <input   id="codigoMaquina" ref="codigoMaquina"  maxlength="6" class="form-control form-control-sm text-center padraoCodigo"  >
                                    </div> 
                                </div>
                            </div> 
                        </div>   
                        

                     </div>   

                      <!--  FIM LINHA 0001 -->    
                    <div class="flex-linha">
                    
                         <div class="linha">


                         </div>

                    </div>

                      
                    <!--  LINHA 002 -->

                    <div class="flex-linha">

                        <div class="row  espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="nomeMaquina" class="col-form-label  label_cabecalho">Descrição</label>
                                <input   id="nomeMaquina" ref="nomeMaquina"  maxlength="30" class="form-control form-control-sm padraoDesc " >                                                                
                            </div> 
                        </div>    

                        <div class="row  espacoEntreComponentes"  >  
                                <div class=" text-start">
                                    <label for="local" class="col-form-label  label_cabecalho">Local fisico</label>
                                    <div class="input-group">
                                        <div class="col-md-1">
                                            <input   id="local" ref="local"   class="form-control form-control-sm text-center padraoCodigo"  >
                                        </div> 
                                    </div>
                                </div> 
                        </div>    
                        
                        <div class="row  espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="descMaquina" class="col-form-label  label_cabecalho">Linha de abertura</label>
                                <select class="form-select padraoCombo " aria-label="Default select example padraoCombo">
                                    <option value="" disabled>Selecione a linha de abertura</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>                                 
                                    <option value="21">21</option>   
                                    <option value="22">22</option>     
                                </select> 
                            </div> 
                        </div>    


                    </div>   

                    <!--  FIM LINHA 0002 -->            
                    
                    
                    <!--  LINHA 003 -->
 

                    <div class="flex-linha">

                        <div class="row  espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="descMaquina" class="col-form-label  label_cabecalho">Lado</label>
                                <select class="form-select  padraoCombo" aria-label="Default select example">
                                    <option value="" disabled>Informe o lado</option>
                                    <option value="U">Unico</option>
                                    <option value="D">Duplo</option>                                 
                                </select> 
                            </div> 
                        </div>   

                    </div>    


                    <!--  FIM LINHA 0003 -->                        

                    <div class="flex-linha">

                        <div class="row  espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="fusos" class="col-form-label  label_cabecalho">Numero de fusos por lado</label>
                                <div class="input-group">
                                    <div class="col-md-1">
                                        <input   id="fusos" ref="fusos" type="number"   class="form-control form-control-sm text-center padraoCodigo"  >
                                    </div> 
                                </div>
                            </div> 
                        </div> 

                        <div class="row  espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="rpm" class="col-form-label  label_cabecalho">RPM</label>
                                <div class="input-group">
                                    <div class="col-md-1">
                                        <input   id="rpm" ref="rpm"  type="number" class="form-control form-control-sm text-center padraoCodigo"  >
                                    </div> 
                                </div>
                            </div> 
                        </div>    
                        
                        
                        <div class="row  espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="ssm" class="col-form-label  label_cabecalho">Cod. SSM</label>
                                <div class="input-group">
                                    <div class="col-md-1">
                                        <input   id="ssm" ref="ssm"  type="number" class="form-control form-control-sm text-center padraoCodigo"  >
                                    </div> 
                                </div>
                            </div> 
                        </div>                            


                    </div>   


                    <div class="flex-linha">

                            <div class="row  espacoEntreComponentes"  >  
                                <div class=" text-start">
                                    <label for="numSerie" class="col-form-label  label_cabecalho">Numero de série</label>
                                    <div class="input-group">
                                        <div class="col-md-1">
                                            <input   id="numSerie" ref="numSerie"    class="form-control form-control-sm text-center padraoDesc"  >
                                        </div> 
                                    </div>
                                </div> 
                            </div> 


                            <div class="row  espacoEntreComponentes"  >  
                                <div class=" text-start">
                                    <label for="horasDia" class="col-form-label  label_cabecalho">Horas trab. dia</label>
                                    <div class="input-group">
                                        <div class="col-md-1">
                                            <input   id="horasDia" ref="horasDia"  type="number" class="form-control form-control-sm text-center padraoCodigo"  >
                                        </div> 
                                    </div>
                                </div> 
                            </div>    

                    </div>   

                    




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
    
    
</template>

<script> 
   import ApiMixin from '@/mixins/ApiMixin' 
   import { mapState } from 'vuex'    
  // import useValidate from '@vuelidate/core'
   //import { required, helpers } from '@vuelidate/validators'   
   //import SimNao from '@/requires/SimNao.vue'
   //import Popper from 'vue3-popper'

    export default {

       name: 'ModeloCrudComponent', 
       mixins: [ApiMixin],
        data: () => ({  
            resultado: {},
            erros: '',
            mensagemSucesso: '',
            mensagemErro : '', 
            haErros: false,      
            haSucesso: false,
            ehInclusao : false ,
            tipoOperacao:'A'  ,   
             
            maquinaTemp: [],             
            maquina: {               
                 idfil: '',
                 codigo:'' ,
                 nome:  '' 
            },
            maquinaInicial: {               
                 idfil: '',
                 codigo:'' ,
                 nome:  ''  


            },
            maquinaDAO: []
             
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
        
        
       async submitForm() { 
            console.log('')
       },
       resetarForm(){
        console.log('')

       },
       created(){  

            if(this.operacao=='A'){
                this.tipoOperacao = 'A' 
            }else if(this.operacao=='I'){
                this.tipoOperacao = 'I'  
            }else if(this.operacao=='E'){
                this.tipoOperacao = 'E'  
            } 

            if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){                   
                this.maquina.codigo = this.codigo ;
                //this.populaForm();   
            }  

            },
        mounted(){
            if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){  
            this.$refs.nomeMaquina.focus();   
            } else{ 
            this.$refs.codigoMaquina.focus();  
            }  
            },

        beforeRouteLeave() {
            return this.apiDesejaSair();       
            } 


   }

   </script>

 