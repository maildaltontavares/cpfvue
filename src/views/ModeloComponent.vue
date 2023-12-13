<template>
    
    <form  @submit.stop.prevent="submitForm" @reset.prevent="resetarForm($event)">  

        <div>  
            <div class="principal cinzaClaro">
                <p class="card-header text-center" style="font-size: 30px; margin-bottom: 80px; margin-top: 2%;color: blue; font-weight: bold;">Modelo de Tela em Branco</p>
            </div>    
        </div> 


        <div class="flex-container ">    
             <div class="divCentral">     
                <div class="divForm">   
                    
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

    export default {

       name: 'ModeloComponent',

       
       async submitForm() { 
            console.log('')
       },
       resetarForm(){
        console.log('')

       }


   }

   </script>

 