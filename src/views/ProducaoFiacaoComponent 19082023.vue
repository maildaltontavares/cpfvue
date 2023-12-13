<template  >
    
    <form  @submit.stop.prevent="submitForm"  >  

        <div>  
            <div class="principal cinzaClaro"  >
                <p class="card-header text-center" style="font-size: 30px; margin-bottom: 80px; margin-top: 1%;color: blue; font-weight: bold;"> {{ this.nmTpMaq }}</p>
            </div>    
        </div> 


        <div class="flex-container ">    
             <div class="divCentral verde">     
                <div class="divForm ">   

                    <div class="flex-linha"> 
                        
                        <div class="row  espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="cdTipoMaquina" class="col-form-label  label_cabecalho">Tipo de Maquina</label>
                                <select class="form-select  padraoCombo" 
                                      ref="cdTipoMaquina" 
                                      :disabled="tpMaquinaDesabilitado"   
                                      @blur="configuraCampos"  
                                       v-model="this.cdTipoMaquina" 
                                     >
                                    <option value="" disabled>Selecione o tipo de maquina</option>
                                    <option v-for="t in this.tipoMaquina" :key="t.codigo" :value="t.codigo"> {{ t.nome }}</option>       
                                         
                                </select> 
                            </div> 
                        </div>        
                         
                    

                     
                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                            
                            <label for="localFisico" class="col-form-label label_cabecalho">Local Fisico</label> 
                                        
                            <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >
                                
                                <template #content v-if="v$.localFisico.$error">
                                    <div v-html="apiListaErros(v$.localFisico.$errors)"></div>
                                </template> 
                            
                                <input type="text"
                                    id="localFisico"
                                    class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                    style="margin:0px;"
                                    maxlength="3"                                        
                                    ref="localFisico" 
                                    @blur="buscaByChave" 
                                    
                                    :disabled="localFisicoDesabilitado" 
                                     
                                    :class="{ error: v$.localFisico.$error}" v-model.lazy="v$.localFisico.$model"
                                > 
                        
                            </Popper>   
                        
                        </div>     
                  

                        <div class="row espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="maquina" class="col-form-label  label_cabecalho">Máquina</label>
                                <div class="input-group"> 

                                    <div class="externoCampoConjugado" > 
                                            <div class="frontCampoConjugado"> 
                                                <!--<input type="text" class="texto21 form-control form-control-sm text-center">   -->

                                                <Popper arrow hover class="dark  ">
                                                        
                                                        <template #content v-if="v$.producaoFiacao.codigoMaquina.$error">
                                                            <div v-html="apiListaErros(v$.producaoFiacao.codigoMaquina.$errors)"></div>
                                                        </template> 
                                                    
                                                        <input type="text" 
                                                            id="codigoMaquina"
                                                            class="form-control form-control-sm"
                                                            maxlength="6"
                                                            v-maska  data-maska="######"
                                                            @blur="buscaByChave"
                                                            disabled 
                                                            :class="{ error: v$.producaoFiacao.codigoMaquina.$error}" v-model.trim="v$.producaoFiacao.codigoMaquina.$model" 
                                                            >                                                 
                                                    </Popper>   

                                            </div> 
                                        

                                            <div class="botaoPesquisa">  
                                                <button type="button" class="btn btn-sm btn-primary bi-search input-group-append" disabled></button> 
                                            </div>           

                                            <!-- 
                                            <div class="backCampoConjugado">   
                                                <input type="text" class="limitadorMedia form-control form-control-sm text-center" disabled > 
                                            </div>   
                                            -->
                                            <div class=" backCampoConjugado ">   
                                                <Popper arrow hover class="dark limitadorMedia "> 

                                                    <template #content v-if="v$.producaoFiacao.dsMaquina.$error">
                                                        <div v-html="apiListaErros(v$.producaoFiacao.dsMaquina.$errors)"></div>
                                                    </template> 
                                                
                                                    <input type="text" class="form-control form-control-sm"
                                                        :class="{ error: v$.producaoFiacao.dsMaquina.$error }" 
                                                        v-model.lazy="v$.producaoFiacao.dsMaquina.$model"
                                                        ref="nomeMaquina" disabled>   

                                                </Popper>  
                                            </div>   


                                    </div>  

                                </div>
                            </div> 
                         </div>  


                        <div class="row espacoEntreComponentes   "  style="width:230px;"   > 
                            
                            <label for="dataProducao" class="col-form-label label_cabecalho">Data Produção</label> 
                                        
                            <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  > 

                                <template #content v-if="v$.producaoFiacao.dataProducao.$error">
                                    <div v-html="apiListaErros(v$.producaoFiacao.dataProducao.$errors)"></div>
                                </template>                                 
                            
                                <input type="Date"
                                    id="dataProducao"
                                    class="form-control form-control-sm   text-center "
                                    style="margin:0px;width:180px"                                                                     
                                    ref="dataProducao"  
                                    @blur="buscaByChave"
                                    :disabled="dataProducaoDesabilitado" 
                                    :class="{ error: v$.producaoFiacao.dataProducao.$error}" v-model="v$.producaoFiacao.dataProducao.$model"
                                > 

                            </Popper>   

                        </div>   

                        
                        <div class="row espacoEntreComponentes"   style="width:230px;"  > 
                                
                                <label for="turno"   class="col-form-label label_cabecalho">Turno</label> 
                                            
                                <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;"  > 

                                    <template #content v-if="v$.producaoFiacao.turno.$error">
                                        <div v-html="apiListaErros(v$.producaoFiacao.turno.$errors)"></div>
                                    </template>  

                                    <select   class="form-select padraoCombo form-control form-control-sm " 
                                    :disabled="turnoDesabilitado" 
                                    :class="{ error: v$.producaoFiacao.turno.$error}"  
                                    v-model="v$.producaoFiacao.turno.$model" 
                                    @blur="buscaByChave">
                                        <option value="" disabled>Selecione o turno</option> 
                                        <option v-for="t in turno" :key="t.codigo" :value="t.codigo"> {{ t.codigo }}</option>      
                                    </select>       
                            
                                                          
                                </Popper>   
                            
                        </div>    

    


                    </div>   


                    <!-- FIM Linha 002 -->


                    <!-- Linha 003 -->
                    <div class="flex-linha"> 


                                <div v-if="(this.exibeLado)" class="row espacoEntreComponentes"   style="width:230px;"  > 
                                        
                                        <label for="lado"   class="col-form-label label_cabecalho">Lado</label> 
                                                    
                                        <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;"  > 

                                            <template #content v-if="v$.producaoFiacao.lado.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.lado.$errors)"></div>
                                            </template>  

                                            <select   class="form-select padraoCombo form-control form-control-sm " 
                                            :disabled="ladoDesabilitado" 
                                            :class="{ error: v$.producaoFiacao.lado.$error}"
                                            v-model="v$.producaoFiacao.lado.$model" 
                                            @blur="buscaByChave">
                                                <option value="" disabled>Selecione o lado</option> 
                                                <option v-for="l in lado " :key="l.codigo" :value="l.codigo"> {{ l.codigo }}</option>      
                                            </select>          
                                    
                                        </Popper>   
                                    
                                </div> 



                                <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="horaInicio" class="col-form-label label_cabecalho">Hora inicial</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                        <template #content v-if="v$.producaoFiacao.horaInicio.$error">
                                              <div v-html="apiListaErros(v$.producaoFiacao.horaInicio.$errors)"></div>
                                        </template>                                      
                                        <input type="text"
                                            :disabled="horaInicioDesabilitado" 
                                            id="horaInicio"
                                            onfocus="this.type='time'"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="5"                                        
                                            ref="horaInicio" 
                                            @blur="buscaByChave"
                                            
                                      
                                            :class="{ error: v$.producaoFiacao.horaInicio.$error}" v-model.trim="v$.producaoFiacao.horaInicio.$model"                                            
                                        > 
                                    </Popper>   

                                </div>   



                                <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="horaFinal" class="col-form-label label_cabecalho">Hora final</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                        <template #content v-if="v$.producaoFiacao.horaFinal.$error">
                                              <div v-html="apiListaErros(v$.producaoFiacao.horaFinal.$errors)"></div>
                                        </template>                                      
                                        <input type="text"
                                            :disabled="horaFinalDesabilitado" 
                                            id="horaFinal"
                                            onfocus="this.type='time'"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="5"                                        
                                            ref="horaFinal" 
                                            
                                            :class="{ error: v$.producaoFiacao.horaFinal.$error}" v-model.trim="v$.producaoFiacao.horaFinal.$model"                                            
                                        > 
                                    </Popper>   

                                </div>    


                                <div class="row espacoEntreComponentes"  >  
                                    <div class=" text-start">
                                        <label for="item" class="col-form-label  label_cabecalho">Item</label>
                                        <div class="input-group"> 

                                            <div class="externoCampoConjugado" > 
                                                    <div class="frontCampoConjugado"> 
                                                        <!--<input type="text" class="texto21 form-control form-control-sm text-center">   -->

                                                             <Popper arrow hover class="dark  ">
                                                                
                                                                <template #content v-if="v$.producaoFiacao.item.$error">
                                                                    <div v-html="apiListaErros(v$.producaoFiacao.item.$errors)"></div>
                                                                </template> 
                                                            
                                                                <money3 class="form-control text-end form-control-sm"  
                                                                    id="item"
                                                                    :disabled="itemDesabilitado"
                                                                    @blur="buscaItem"                                                                   
                                                                    :class="{ error: v$.producaoFiacao.item.$error}" v-model.lazy="v$.producaoFiacao.item.$model" v-bind="config_sd">  
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
                                                        :class="{ error: v$.producaoFiacao.dsItem.$error }" 
                                                        v-model.trim="v$.producaoFiacao.dsItem.$model"
                                                        ref="item_nome" disabled>   
                                                    </div>  

                                            </div>  

                                        </div>
                                    </div> 
                                </div> 

                       

                         
                    </div> 



                    <!-- FIM Linha 003 
                   
                    
                    -->


              

                    
                    
                    <div  class="div-box ">
                          <p>Processo produtivo</p>
                    </div> 


                      <!--  LINHA 0004 -->    
                  
                      <div class="flex-linha"> 

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="qtdeProduzida" class="col-form-label label_cabecalho">Qtde. Prod.</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.qtdeProduzida.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.qtdeProduzida.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"
                                        :class="{ error: v$.producaoFiacao.qtdeProduzida.$error}" v-model="v$.producaoFiacao.qtdeProduzida.$model" v-bind="config"  >
                                        </money3>

                                    </Popper>   

                        </div>   


                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="eficiencia" class="col-form-label label_cabecalho">Efic. Máq.</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.eficiencia.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.eficiencia.$errors)"></div>
                                        </template> 
                                        <money3 class="form-control text-end form-control-sm"  
                                        :class="{ error: v$.producaoFiacao.eficiencia.$error}" v-model="v$.producaoFiacao.eficiencia.$model" v-bind="config_1d"  >
                                        </money3>

                                    </Popper>   

                        </div>   


                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label v-if="!(this.cdTipoMaquina =='02') && !(this.cdTipoMaquina =='03') "  for="rpm" class="col-form-label label_cabecalho">RPM</label> 
                                    <label v-if="(this.cdTipoMaquina =='02' || this.cdTipoMaquina =='03' )"  for="rpm" class="col-form-label label_cabecalho">M/Min</label> 
                                    
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.rpm.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.rpm.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.rpm.$error}" v-model="v$.producaoFiacao.rpm.$model" v-bind="configInt"   @blur="calcEficiencia()">
                                       
                                        </money3> 
                                            

                                    </Popper>   

                        </div>            
                        
                        <div v-if="(this.exibeAlfaTorcao)" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="alfaTorcao" class="col-form-label label_cabecalho">Alfa Torção</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.alfaTorcao.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.alfaTorcao.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm" 
                                        :class="{ error: v$.producaoFiacao.alfaTorcao.$error}" v-model="v$.producaoFiacao.alfaTorcao.$model" v-bind="config"  >
                                        </money3>

                                    </Popper>   

                        </div>           
                        
                        <div v-if="(this.exibeNumeroFusos)" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="numeroFusos" class="col-form-label label_cabecalho">Num. fusos</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.numeroFusos.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.numeroFusos.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="3"
                                        :class="{ error: v$.producaoFiacao.numeroFusos.$error}" v-model="v$.producaoFiacao.numeroFusos.$model" v-bind="configInt" @blur="calcEficiencia()" >
                                        </money3>

                                    </Popper>   

                        </div>                          


                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="eficReal" class="col-form-label label_cabecalho">Efic. Real</label> 
                                    
                                        <input type="text"
                                            id="eficReal"
                                            class="form-control form-control-sm text-uppercase text-center padraoCodigo"
                                            style="margin:0px;color:red;"           
                                            ref="eficReal"  
                                            v-model="this.eficReal" 
                                            disabled
                                        >  
                                    

                        </div> 

                        <div class="row espacoEntreComponentes  "  style="width:130px;"  v-if="(this.cdTipoMaquina== '02' )" > 
                                <div class=" text-start">
                                    <label for="prodKgh" class="col-form-label  label_cabecalho">Prod. Kg/h</label>
                                    <div class="input-group">                                       
                                            <input   id="prodKgh" ref="prodKgh" style="margin:0px;color:red;"
                                            v-model="this.prodKgh" 
                                            disabled class="form-control form-control-sm text-center padraoCodigo"  >
                                        
                                    </div>
                                </div> 
                        </div>                          

              

                        <div v-if="(this.exibeNumRupturas)" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="numRupturas" class="col-form-label label_cabecalho">Num. Rupt</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.numRupturas.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.numRupturas.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="3"
                                        :class="{ error: v$.producaoFiacao.numRupturas.$error}" v-model="v$.producaoFiacao.numRupturas.$model" v-bind="configInt" >
                                        </money3>

                                    </Popper>   

                        </div>                          

                        <div v-if="(this.exibeEstiragem)" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="estiragem" class="col-form-label label_cabecalho">Estiragem</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.estiragem.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.estiragem.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"   
                                        :class="{ error: v$.producaoFiacao.estiragem.$error}" v-model="v$.producaoFiacao.estiragem.$model" v-bind="config">
                                        </money3>

                                    </Popper>   

                        </div>  
                        
                        <div v-if="(this.exibeQtdeFitas)" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="qtdeFitas" class="col-form-label label_cabecalho">Qtde. fitas</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.qtdeFitas.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.qtdeFitas.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="3"
                                        :class="{ error: v$.producaoFiacao.qtdeFitas.$error}" v-model="v$.producaoFiacao.qtdeFitas.$model" v-bind="configInt" >
                                        </money3>

                                    </Popper>   

                        </div>                         



                        <div class="row espacoEntreComponentes"  >  
                                    <div class=" text-start">
                                        <label for="operador" class="col-form-label  label_cabecalho">Operador</label>
                                        <div class="input-group"> 

                                            <div class="externoCampoConjugado" > 
                                                    <div class="frontCampoConjugado"> 
                                                        <!--<input type="text" class="texto21 form-control form-control-sm text-center">   -->

                                                        <Popper arrow hover class="dark  ">
                                                                
                                                                <template #content v-if="v$.producaoFiacao.operador.$error">
                                                                    <div v-html="apiListaErros(v$.producaoFiacao.operador.$errors)"></div>
                                                                </template>  

                                                                <money3 class="form-control text-end form-control-sm"  
                                                                    id="operador"
                                                                    @blur="apiPesquisaParam('operador', producaoFiacao.operador, this.producaoFiacao)"
                                                                    :class="{ error: v$.producaoFiacao.operador.$error}" v-model.lazy="v$.producaoFiacao.operador.$model" v-bind="config_sd">  
                                                                </money3> 

                                                            </Popper>   

                                                    </div> 
                                                

                                                    <div class="botaoPesquisa">  
                                                        <button type="button" class="btn btn-sm btn-primary bi-search input-group-append" data-bs-toggle="modal"
                                                               data-bs-target="#modalPesquisaOperador" tabindex="-1"  @click="apiFlushPesquisa">
                                                        </button>
                                                    </div>           

                                                
                                                        <div class="backCampoConjugado">   
                                                       <!-- <input type="text" class="limitadorMedia form-control form-control-sm text-center" disabled >  -->
                                                        <input type="text" class="form-control form-control-sm"
                                                        :class="{ error: v$.producaoFiacao.dsOperador.$error }" 
                                                        v-model.trim="v$.producaoFiacao.dsOperador.$model"
                                                        ref="operador_nome" disabled>   
                                                    </div>  
                                                
                                            </div>  

                                        </div>
                                    </div> 
                                </div>                        



                     </div>
                     <!--  FIM LINHA 0004 -->    



                     <!-- LINHA 005 -->

                     <div class="flex-linha" :style="{marginBottom:  linhaQualidade04}">
                        

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="loteProducao" class="col-form-label label_cabecalho">Lote</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <template #content v-if="v$.producaoFiacao.loteProducao.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.loteProducao.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm" style="margin:0px;"
                                            id="loteProducao"
                                            @blur="apiLoteFiacao()"
                                            ref="loteProducao"   
                                            :class="{ error: v$.producaoFiacao.loteProducao.$error}" v-model.lazy="v$.producaoFiacao.loteProducao.$model" v-bind="config_sd">  
                                        </money3>
                                        
                                        <!--

                                        <input type="text"
                                            id="loteProducao"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"  
                                            @blur="apiLoteFiacao()"
                                            ref="loteProducao"   
                                            :class="{ error: v$.producaoFiacao.loteProducao.$error}" v-model.lazy="v$.producaoFiacao.loteProducao.$model" 
                                            
                                        > 
                                        -->

                                    </Popper>  
                                    <!-- v-maska data-maska="##########" --> 

                        </div> 
 
                        <div class="row espacoEntreComponentes  "  style="width:430px;"    > 
                                <div class=" text-start">
                                    <label for="obs" class="col-form-label  label_cabecalho">Observação</label>
                                    <div class="input-group">                                       
                                            <input   id="obs" ref="obs" style="margin:0px;"
                                            v-model="this.producaoFiacao.obs" 
                                            class="form-control form-control-sm  "  >
                                        
                                    </div>
                                </div> 
                        </div>                        
                    
                    </div>


                    <!-- FIM LINHA 005 -->



                    <div v-if="(this.cdTipoMaquina== '04' )" class="div-box ">
                          <p>Cortes por 1000 RH</p>
                    </div>                     

                    <div v-if="(this.cdTipoMaquina== '06' )" class="div-box ">
                          <p>Cortes por 100 KM</p>
                    </div> 
 
                    <div v-if="(this.cdTipoMaquina== '02' )" class="div-box ">
                          <p>Qualidade Cardas</p>
                    </div> 

                    <div v-if="(this.cdTipoMaquina== '03' )" class="div-box ">
                          <p>Andamento</p>
                    </div> 



                    <!-- RUPTURAS  LINHA 006-->                   

                    <div v-if="(this.cdTipoMaquina== '04' || this.cdTipoMaquina== '06' )"  class="flex-linha"  >

                        <div v-if="(this.exibeTensaoBobina )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="tensaoBobina" class="col-form-label label_cabecalho">Tensão bob</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.tensaoBobina.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.tensaoBobina.$errors)"></div>
                                        </template> 
                                        <money3 class="form-control text-end form-control-sm"  
                                        :class="{ error: v$.producaoFiacao.tensaoBobina.$error}" v-model="v$.producaoFiacao.tensaoBobina.$model" v-bind="config_3d"  >
                                        </money3>

                                    </Popper>   

                        </div>  



                        <div v-if="(this.exibeRpmCAR)" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="rpmCAR" class="col-form-label label_cabecalho">RPM card.</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.rpmCAR.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.rpmCAR.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.rpmCAR.$error}" v-model="v$.producaoFiacao.rpmCAR.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>      

                        <div v-if="(this.exibePton)" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="pton" class="col-form-label label_cabecalho">N</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.pton.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.pton.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.pton.$error}" v-model="v$.producaoFiacao.pton.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>   

                        <div v-if="(this.exibePtos)"  class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="ptos" class="col-form-label label_cabecalho">S</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.ptos.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.ptos.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.ptos.$error}" v-model="v$.producaoFiacao.ptos.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>          
                        
                        <div v-if="(this.exibePtol)"  class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="ptol" class="col-form-label label_cabecalho">L</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.ptol.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.ptol.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.ptol.$error}" v-model="v$.producaoFiacao.ptol.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>                           
                        
                        <div v-if="(this.exibePtof)"  class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="ptof" class="col-form-label label_cabecalho">T</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.ptof.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.ptof.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.ptof.$error}" v-model="v$.producaoFiacao.ptof.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>                          
                        
                        
                        <div v-if="(this.exibeMo)"  class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="mo" class="col-form-label label_cabecalho">MO</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.mo.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.mo.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.mo.$error}" v-model="v$.producaoFiacao.mo.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>       


                        
                     <div v-if="(this.exibeCpvsl)"  class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="cpvsl" class="col-form-label label_cabecalho">Cp V+ SL+</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.cpvsl.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.cpvsl.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.cpvsl.$error}" v-model="v$.producaoFiacao.cpvsl.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>   

                        <div v-if="(this.exibeCmvsl)"  class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="cmvsl" class="col-form-label label_cabecalho">Cm V- SL-</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.cmvsl.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.cmvsl.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.cmvsl.$error}" v-model="v$.producaoFiacao.cmvsl.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>   


                    </div>

                    <!-- Linha 007  -->

                    <div  v-if="(this.cdTipoMaquina== '04' || this.cdTipoMaquina== '06' )" class="flex-linha" :style="{marginBottom:  linhaQualidade01}">   

                        <div v-if="(this.exibeCcpc)" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="ccpc" class="col-form-label label_cabecalho">CCp C+</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
              

                                        <template #content v-if="v$.producaoFiacao.ccpc.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.ccpc.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.ccpc.$error}" v-model="v$.producaoFiacao.ccpc.$model" v-bind="configInt"  >
                                        </money3>
 
                                    </Popper>   

                        </div>   

          
                     

                        <div v-if="(this.exibeCcmc)"  class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="ccmc" class="col-form-label label_cabecalho">CCm C-</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.ccmc.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.ccmc.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.ccmc.$error}" v-model="v$.producaoFiacao.ccmc.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>    


                        <div v-if="(this.exibeJp)" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="jp" class="col-form-label label_cabecalho">Jp (P+)</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.jp.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.jp.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.jp.$error}" v-model="v$.producaoFiacao.jp.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>   


                        <div v-if="(this.exibeJm)"  class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="jm" class="col-form-label label_cabecalho">Jm (P-)</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.jm.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.jm.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.jm.$error}" v-model="v$.producaoFiacao.jm.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>                       

                        <div v-if="(this.exibeCvp)"  class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="cvp" class="col-form-label label_cabecalho">CVP</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.cvp.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.cvp.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.cvp.$error}" v-model="v$.producaoFiacao.cvp.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>     
 
                        
                        <div v-if="(this.exibeCvm)"  class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="cvm" class="col-form-label label_cabecalho">CVM</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.cvm.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.cvm.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.cvm.$error}" v-model="v$.producaoFiacao.cvm.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>     
                        
                        <div v-if="(this.exibeCnat)"  class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="cnat" class="col-form-label label_cabecalho">Rup. Nat.</label>                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.cnat.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.cnat.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  maxlength="6"
                                        :class="{ error: v$.producaoFiacao.cnat.$error}" v-model="v$.producaoFiacao.cnat.$model" v-bind="configInt"  >
                                        </money3>

                                    </Popper>   

                        </div>      
                        
                        <div v-if="(this.exibeProb1)" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="prob1" class="col-form-label label_cabecalho">% Robô 01</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.prob1.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.prob1.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  
                                        :class="{ error: v$.producaoFiacao.prob1.$error}" v-model="v$.producaoFiacao.prob1.$model" v-bind="config"  >
                                        </money3>

                                    </Popper>   

                        </div>      
                        
                        <div v-if="(this.exibeProb2)" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="prob2" class="col-form-label label_cabecalho">% Robô 02</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.prob2.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.prob2.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm"  
                                        :class="{ error: v$.producaoFiacao.prob2.$error}" v-model="v$.producaoFiacao.prob2.$model" v-bind="config"  >
                                        </money3>

                                    </Popper>   

                        </div>                

                        <div v-if="(this.exibeProb3)" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="prob3" class="col-form-label label_cabecalho">% Robô 03</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                        <template #content v-if="v$.producaoFiacao.prob3.$error">
                                            <div v-html="apiListaErros(v$.producaoFiacao.prob3.$errors)"></div>
                                        </template> 

                                        <money3 class="form-control text-end form-control-sm" 
                                        :class="{ error: v$.producaoFiacao.prob3.$error}" v-model="v$.producaoFiacao.prob3.$model" v-bind="config"  >
                                        </money3>

                                    </Popper>   

                        </div>    
                        
                    </div>

                    <!--FIM  Linha 007 -->

                    <!-- QUALIDADE CARDAS / PASSADORES -->                   

                    <div v-if="(this.cdTipoMaquina== '02' || this.cdTipoMaquina== '03' )"  class="flex-linha"  :style="{marginBottom:  linhaQualidade02}" > 

                             <div v-if="(this.exibeA_percent )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="a_percent" class="col-form-label label_cabecalho">A%</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.a_percent.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.a_percent.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.a_percent.$error}" v-model="v$.producaoFiacao.a_percent.$model" v-bind="config_2d"  >
                                            </money3>

                                        </Popper>   

                            </div>    


                           <div v-if="(this.exibeD_percent )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="d_percent" class="col-form-label label_cabecalho">D%</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.d_percent.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.d_percent.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.d_percent.$error}" v-model="v$.producaoFiacao.d_percent.$model" v-bind="config_1d"  >
                                            </money3>

                                        </Popper>   

                            </div>  


                            <div v-if="(this.exibeCv )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="cv" class="col-form-label label_cabecalho">CV</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.cv.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.cv.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.cv.$error}" v-model="v$.producaoFiacao.cv.$model" v-bind="config_2d"  >
                                            </money3>

                                        </Popper>   

                            </div>                              

                            <div v-if="(this.exibeCvIn )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="cvin" class="col-form-label label_cabecalho">CVIn</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.cvIn.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.cvIn.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.cvIn.$error}" v-model="v$.producaoFiacao.cvIn.$model" v-bind="config_2d"  >
                                            </money3>

                                        </Popper>   

                            </div>                              


                            <div v-if="(this.exibePg )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="pg" class="col-form-label label_cabecalho">PG</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.pg.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.pg.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.pg.$error}" v-model="v$.producaoFiacao.pg.$model" v-bind="config_1d"  >
                                            </money3>

                                        </Popper>   

                            </div>    

                            
                        </div>

    
                        <!-- FIM QUALIDADE CARDAS 1 -->              
                         
                         
                        <!-- QUALIDADE CARDAS / PASSADORES 2 -->                   

                         <div v-if="(this.cdTipoMaquina== '02'   )"  class="flex-linha"  :style="{marginBottom:  linhaQualidade03}">
                            
                            <div v-if="(this.exibeT25 )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="t25" class="col-form-label label_cabecalho">T (25%)</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.t25.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.t25.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.t25.$error}" v-model="v$.producaoFiacao.t25.$model"   v-bind="configInt"  >
                                            </money3>

                                        </Popper>   

                            </div>                   
                            
                            <div v-if="(this.exibeT20 )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="t20" class="col-form-label label_cabecalho">T (20%)</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.t20.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.t20.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.t20.$error}" v-model="v$.producaoFiacao.t20.$model"  v-bind="configInt"  >
                                            </money3>

                                        </Popper>   

                            </div>                                 
            
                            <div v-if="(this.exibeT15 )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="t15" class="col-form-label label_cabecalho">T (15%)</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.t15.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.t15.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.t15.$error}" v-model="v$.producaoFiacao.t15.$model"   v-bind="configInt" >
                                            </money3>

                                        </Popper>   

                            </div>                                  


                            <div v-if="(this.exibeT125 )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="t125" class="col-form-label label_cabecalho">T1 (25%)</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.t125.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.t125.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.t125.$error}" v-model="v$.producaoFiacao.t125.$model"  v-bind="configInt"    >
                                            </money3>

                                        </Popper>   

                            </div>                   
                            
                            <div v-if="(this.exibeT120 )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="t120" class="col-form-label label_cabecalho">T1 (20%)</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.t120.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.t120.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.t120.$error}" v-model="v$.producaoFiacao.t120.$model"   v-bind="configInt" >
                                            </money3>

                                        </Popper>   

                            </div>                                 
            
                            <div v-if="(this.exibeT115 )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="t115" class="col-form-label label_cabecalho">T1 (15%)</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.t115.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.t115.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.t115.$error}" v-model="v$.producaoFiacao.t115.$model"  v-bind="configInt"  >
                                            </money3>

                                        </Popper>   

                            </div>   


                            <div v-if="(this.exibeT225 )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="t225" class="col-form-label label_cabecalho">T2 (25%)</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.t225.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.t225.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.t225.$error}" v-model="v$.producaoFiacao.t225.$model"  v-bind="configInt"    >
                                            </money3>

                                        </Popper>   

                            </div>                   
                            
                            <div v-if="(this.exibeT220 )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="t220" class="col-form-label label_cabecalho">T2 (20%)</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.t220.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.t220.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.t220.$error}" v-model="v$.producaoFiacao.t220.$model"   v-bind="configInt" >
                                            </money3>

                                        </Popper>   

                            </div>                                 
            
                            <div v-if="(this.exibeT215 )" class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                        
                                        <label for="t215" class="col-form-label label_cabecalho">T2 (15%)</label> 
                                                    
                                        <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  

                                            <template #content v-if="v$.producaoFiacao.t215.$error">
                                                <div v-html="apiListaErros(v$.producaoFiacao.t215.$errors)"></div>
                                            </template> 
                                            <money3 class="form-control text-end form-control-sm"  
                                            :class="{ error: v$.producaoFiacao.t215.$error}" v-model="v$.producaoFiacao.t215.$model"   v-bind="configInt" >
                                            </money3>

                                        </Popper>   

                            </div>   


                    </div>


                    <!-- FIM QUALIDADE CARDAS 2 -->                   
                    
                </div>



            </div>
        </div>

        <button hidden v-if="tipoOperacao == 'E'" type="button"  accesskey="e" class="btn btn-sm btn-danger ms-2 me" data-bs-toggle="modal"
                 data-bs-target="#modalSimNao"> 
       </button>        

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

                <div class="col-3 div_rodape d-flex justify-content-end" >



                    <button   type="button"  class="btn btn-sm btn-primary ms-2 me" accesskey="n" @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>ovo</button> 

                    <button v-if="tipoOperacao == 'E' || tipoOperacao  == 'A'  " type="button"  accesskey="e" class="btn btn-sm btn-primary ms-2 me"  @click="exibeModal('excluir','Confirma exclusão ?',['S','N'],'aviso'  )"><u>E</u>xcluir
                    </button>              

                    <button v-if="(tipoOperacao  == 'I' || tipoOperacao  == 'A'  )" type="submit" class="btn btn-sm btn-primary ms-2 me" accesskey="s"><u>S</u>alvar</button>
                    <button type="button" class="btn btn-sm btn-secondary ms-2 me" accesskey="p" @click="exibeModal('pesquisar','Deseja sair deste formulário?',['S','N'] ,'sucesso' )"><u>P</u>esquisar</button>


                </div> 

        </div>   




<!-- 
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



                <button   type="button"  class="btn btn-sm btn-primary ms-2 me" accesskey="n" @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>ovo</button> 

                <button v-if="tipoOperacao == 'E' || tipoOperacao  == 'A'  " type="button"  accesskey="e" class="btn btn-sm btn-primary ms-2 me"  @click="exibeModal('excluir','Confirma exclusão ?',['S','N'],'aviso'  )"><u>E</u>xcluir
                </button>              

                <button v-if="(tipoOperacao  == 'I' || tipoOperacao  == 'A'  )" type="submit" class="btn btn-sm btn-primary ms-2 me" accesskey="s"><u>S</u>alvar</button>
                <button type="button" class="btn btn-sm btn-secondary ms-2 me" accesskey="p" @click="exibeModal('pesquisar','Deseja sair deste formulário?',['S','N'] ,'sucesso' )"><u>P</u>esquisar</button>


            </div> 

        </div>   
-->

    </form>  

    <PesquisaItem @setaPesquisa="setaPesquisa($event)"></PesquisaItem>
    <PesquisaOperador @setaPesquisa="setaPesquisa($event)"></PesquisaOperador>
   <!--  <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes"></SimNao>-->
    <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes" :tipo="simNaoTipo"></SimNao>

    
    
</template>

<script> 

   import ApiMixin from '@/mixins/ApiMixin' ;
   import { mapState } from 'vuex'    ;
   import { Money3Component } from 'v-money3';
   import useValidate from '@vuelidate/core'  ;
   import PesquisaItem from '@/requires/PesquisaItem.vue';   
   import { required } from '@vuelidate/validators'   ; //, minLength,maxLength,between
   import { helpers} from '@vuelidate/validators'   
   import SimNao from '@/requires/SimNao.vue'
   import Popper from 'vue3-popper'
   import PesquisaOperador from '@/requires/PesquisaOperador';

    export default {

        name: 'ProducaoFiacaoComponent',
        mixins: [ApiMixin], 
        components: {  PesquisaOperador,   PesquisaItem,Popper, money3: Money3Component,SimNao  },
        
        setup: () => (
            { v$: useValidate() }
        ),       
        data: () => ({
            resultado: {},
            acao:'',
            dataValidada: false,
            msgTemp:'',
            simNaoPergunta: '',
            simNaoBotoes: [],
            simNaoRetorno: '',
            letraEntradaSaida: '',
            letraSimNao: '',                   
            erros: '', 
            retorno:'',
            dataAntesReset:'',
            turnoAntesReset:'',
            resetForm:false,
            retornoDatas:[],
            mensagemSucesso: '',
            mensagemErro : '', 
            haErros: false,      
            haSucesso: false,
            ehInclusao : false ,
            tipoOperacao:'A' ,
            tipoMaquina : [],
            tpMaquina: {               
                 idfil: '',
                 codigo:'' ,
                 nome:  '',
                 cdClasse: '',
                 dsClasse: ''  
            },
            libera:'',
            cdTipoMaquina:'',
            localFisico:'',
            tpMaquinaDesabilitado:false,
            localFisicoDesabilitado:false,
            maquinaDesabilitado:false,
            dataProducaoDesabilitado:false,
            turnoDesabilitado:false,
            ladoDesabilitado:false,
            horaInicioDesabilitado:false,
            horaFinalDesabilitado:false,
            itemDesabilitado:false,
            linhaQualidade01:'10px',
            linhaQualidade02:'10px',
            linhaQualidade03:'10px',
            linhaQualidade04:'10px',
           
            
            exibeLado:false,
            exibeNumeroFusos:false,                   
            exibeNumRupturas:false,  
            exibeAlfaTorcao:false,  
            exibeTpm:true, 			
            exibeRpmCAR:true, 
            exibePton:true, 
            exibePtos:true, 
            exibePtol:true, 
            exibePtof:true, 
            exibeMo:true, 	
            exibeCpvsl:true, 	
            exibeCmvsl:true, 
            exibeCcpc:true, 		
            exibeCcmc:true, 	
            exibeJp:true,  		
            exibeJm :true,
            exibeCvp:true, 	
            exibeCvm:true, 		
            exibeProb1:true, 
            exibeProb2:true, 
            exibeProb3:true, 
            exibeTensaoBobina:true,  
            exibeEstiragem:true,
            exibeQtdeFitas:true,
            exibeD_percent:true,
            exibeCv:true,
            exibeCvIn:true,
            exibePg:true,
            exibeA_percent:true,
            exibeT25:true,
            exibeT20:true,
            exibeT15:true,
            exibeT125:true,
            exibeT120:true,
            exibeT115:true,
            exibeT225:true,
            exibeT220:true,
            exibeT215:true,  

            exibeCnat:true,  
            aResult:[],

            eficReal:0,
            prodKgh:0,
            artigoSap:'',
            tituloCalcEfic:0,
            tempoDuracao:0,
            classeItem:0,

            numFusos:0,  
                    
            //dsItem:''  ,

            tipoMaquinaTemp: {    
                 codigo:'' ,
                 nome:  '' , 
            },

            loteFiacao: {    
                 idfil:'' ,
                 tipoMaquina:  '' ,   
                 item: '',
                 idSSM: 0,
                 lote:'' 
            },            
            //producaoFiacao:{
                
            //},


            producaoFiacao:{ 
                codigoMaquina:'' ,    
                dsMaquina:'' ,   
                dsItem:'' , 
                dsOperador:''  ,
                dataProducao:'' ,   
                turno:'',  
                horaInicio:'',   
                lado:'',	  
                horaFinal:'',   
                item:'',    
                qtdeProduzida:0,    
                eficiencia :0,	
                quilosHora:0,	
                codigoAbertura:'',	
                loteProducao:'',	 
                tituloCadastro:0, 		
                cdFornecPoliester:'',
                cdFornecElastano:'',
                lotePoliester:'',
                loteElastano:'',
                cor:'',		
                rpm:0,	
                numeroFusos:0,	
                numRupturas:0,	
                metragem:0,	
                idSSM:9999999,		
                numeroTrocas:0,	
                ehTroca:'',	
                horaInicialTrocaFio:0,	
                horaFinalTrocaFio:0,	
                nomeFornElastano:'',	
                nomeFornPoliester:'',	
                numeroSerie:'',	
                localFisico:'',	
                ehReprocesso:'',	
                obs:"",		
                alfaTorcao:0,	
                tpm:0,					
                tituloNominal:0,		
                operador:'',	
                rpmCAR:0,	
                pton:0,	
                ptos:0,	
                ptol:0,	
                ptof:0,	
                mo:0,		
                cpvsl:0,	
                cmvsl:0,	
                ccpc:0,	
                ccmc:0,	
                jp:0,		
                jm:0,		
                cvp:0,		
                cvm:0,		
                prob1:0,	
                prob2:0,
                prob3:0,
                tensaoBobina:0,	
                cnat:0,        
                prdtur:0,      
                tituloReal:0,
                estiragem:0,
                qtdeFitas:0,
                d_percent:0,
                cv:0,
                cvIn:0,
                pg:0,
                a_percent:0,
                t25:0,
                t20:0,
                t15:0,
                t125:0,
                t120:0,
                t115:0,
                t225:0,
                t220:0,
                t215:0

            }  ,
            simNaoTipo: 'sucesso',
            nmTpMaq :'',
            tipoMaquinaItem:'',  

            producaoFiacaoDao:[],
            producaoFiacaoValidacao:{},
            producaoFiacaoInicial:{ 
                codigoMaquina:'' ,    
                dsMaquina:'' ,   
                dataProducao:'' ,   
                turno:'',  
                horaInicio:'',   
                lado:'',	  
                horaFinal:'',   
                item:'',    
                qtdeProduzida:0,    
                eficiencia :0,	
                quilosHora:0,	
                codigoAbertura:'',	
                loteProducao:'',	 
                tituloCadastro:0, 		
                cdFornecPoliester:'',
                cdFornecElastano:'',
                lotePoliester:'',
                loteElastano:'',
                cor:'',		
                rpm:0,	
                numeroFusos:0,	
                numRupturas:0,	
                metragem:0,	
                idSSM:9999999,		
                numeroTrocas:0,	
                ehTroca:'',	
                horaInicialTrocaFio:0,	
                horaFinalTrocaFio:0,	
                nomeFornElastano:'',	
                nomeFornPoliester:'',	
                numeroSerie:'',	
                localFisico:'',	
                ehReprocesso:'',	
                obs:"",		
                alfaTorcao:0,	
                tpm:0,					
                tituloNominal:0,		
                operador:'',	
                rpmCAR:0,	
                pton:0,	
                ptos:0,	
                ptol:0,	
                ptof:0,	
                mo:0,		
                cpvsl:0,	
                cmvsl:0,	
                ccpc:0,	
                ccmc:0,	
                jp:0,		
                jm:0,		
                cvp:0,		
                cvm:0,		
                prob1:0,	
                prob2:0,
                prob3:0,
                tensaoBobina:0,	
                cnat:0,        
                prdtur:0,      
                tituloReal:0,
                estiragem:0,
                qtdeFitas:0,
                d_percent:0,
                cv:0,
                cvIn:0,
                pg:0,
                a_percent:0,
                t25:0,
                t20:0,
                t15:0,
                t125:0,
                t120:0,
                t115:0,
                t225:0,
                t220:0,
                t215:0          
            }  ,
            tituloCalculo:0,
            turno: [
                { "codigo": "A"},
                { "codigo": "B"},
                { "codigo": "C"}              
                ],   
            lado: [
                { "codigo": "A"},
                { "codigo": "B"},                
                { "codigo": "U"},
                ],                                    

        }),
  

        props: {
            maquinaProps  : {
            type: String,
            required: true,
            },
            dataProducaoProps  : {
            type: String,
            required: true,
            },
            turnoProps  : {
            type: String,
            required: true,
            },    
            ladoProps  : {
            type: String,
            required: true,
            },  
            horaInicialProps  : {
            type: String,
            required: true,
            },    
            localFisicoProps  : {
            type: String,
            required: true,
            },                                 
            operacao: {
            type : String,
            required: true,
            },
            tipoMaquinaProps: {
            type : String,
            required: true,
            },            
        },  

        validations: {
            
            localFisico: { required: helpers.withMessage('Informe o local físico', required)} , 
            cdTipoMaquina: { required: helpers.withMessage('Informe o tipo de máquina', required)} , 
            producaoFiacao: {  
                    codigoMaquina: { required: helpers.withMessage('Informe o código da maquina', required)} ,      
                    dsMaquina: { required: helpers.withMessage('Maquina não informada', required) }   ,
                    dataProducao: { required: helpers.withMessage('Data de produção deve ser igual ou menor que a data do dia.', 
                         
                        function(val) {

                              if(!val==''){ 

                                    if(!this.validaDataProducao(val)){
                                        return false
                                    }else{

                                        return true
                                    }

                            }else{
                                return false
                            }

                         }     
                    
                    )} ,      
                    turno: { required: helpers.withMessage('Informe o turno', required)} ,      
                    horaInicio: { required: helpers.withMessage('Informe a hora inicial de produção', required)} ,       
                    lado: { required: helpers.withMessage('Informe o lado da maquina', required)} ,    	  
                    horaFinal: { required: helpers.withMessage('Informe a hora final de produção', required)} ,       
                    item: { required: helpers.withMessage('Informe o item produzido', 
                    
                    
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
                    dsOperador: { required: helpers.withMessage('Nome do operador inválido.', required)} , 
     
                    qtdeProduzida: { required: helpers.withMessage('Informe a quantidade produzida.',
                    
                            function(val) {

                                this.liber = val;

                                if (this.cdTipoMaquina=='00' || this.cdTipoMaquina=='' ){  
                                    return true
                                }else 
                                {
                                    //if(val==0){
                                    //    return false
                                    //}else{
                                        return true

                                    //} 

                                }
                            }


                    
                    )} ,
                   

                    eficiencia : { required: helpers.withMessage('Informe a eficiencia da maquina', 
                
                            function(val) {

                                this.liber = val;

                                if (this.cdTipoMaquina=='00' || this.cdTipoMaquina=='' ){  
                                    return true
                                }else 
                                {
                                  //  if(val==0){
                                  //      return false
                                   // }else{
                                        return true

                                  //  } 

                                }
                            }                
                
                )} ,   	
                    //kgHora: { required: helpers.withMessage('Informe os quilos produzidos por dia', required)} ,   	
                    //codigoAbertura: { required: helpers.withMessage('Informe o código da linha de abertura', required)} ,   
                    loteProducao: { required: helpers.withMessage('Informe o lote de produção', 
                    
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
                    
                    
                    
                    )},

                    //loteProducao: { required: helpers.withMessage('Informe o lote de produção', required),
                            //minLength:helpers.withMessage('Lote deve ter 10 caracteres', minLength(10)),
                            //maxLength:helpers.withMessage('Lote deve ter 10 caracteres', maxLength(10))
                        //} , 	 

                    //titulo: { required: helpers.withMessage('Informe o titulo do fio produzido', required)} , 		
                    //fornecPoliester: { required: helpers.withMessage('Informe o fornecedor de poliester', required)} , 
                    //fornecElastano: { required: helpers.withMessage('Informe o fornecedor de elastano', required)} , 
                    //lotePoliester: { required: helpers.withMessage('Informe o lote de poliester do fornecedor', required)} , 
                    //loteElastano: { required: helpers.withMessage('Informe o lote de elastano do fornecedor', required)} , 
                    //cor: { required: helpers.withMessage('Informe a cor do fio', required)} , 	
                    rpm: { required: helpers.withMessage('Valor inválido para  este tipo de máquina',             
                        function(val) {

                                 if (this.cdTipoMaquina=='00' || this.cdTipoMaquina==''  ){  
                                    return true
                                }else{
                                       

                                        //console.log('RPM')
                                        //console.log(val)
                                        if (  val > 0 )                             
                                        {  
 
                                                    if(this.cdTipoMaquina=='02'){ 
                                                    
                                                        if(val < 80 || val > 500   ){                                                           
                                                            return false
                                                        }else{
                                                            return true
                                                        }

                                                    }else if(this.cdTipoMaquina=='04'){                                                    
                                                        if( val < 40000 || val > 110000   ){                                                             
                                                            return false
                                                        }else{
                                                                return true
                                                            }   

                                                    }else if(this.cdTipoMaquina=='05' || this.cdTipoMaquina=='03'){                                                    
                                                        if( val <500 || val > 1000   ){                                                             
                                                            return false
                                                        }else{
                                                                return true
                                                            }

                                                    } else if(this.cdTipoMaquina=='06'){
                                                        
                                                        if( val < 500 || val > 1000  ){                                                           
                                                            return false
                                                        }else{
                                                                return true
                                                            }

                                                    }else{                                

                                                            return false

                                                    } 
                                            
                                        }else{ 
                                            //return false
                                            return true
                                        }
                                        
                                }
                        }
                    
                    
                    
                    
                    
                    
                    )} , 	
                    numeroFusos: { required: helpers.withMessage('Informe o número de fusos',  

                            function(val) {

                                        if (this.cdTipoMaquina=='00' || this.cdTipoMaquina=='' ){  
                                            return true
                                        }else 
                                        { 
                                                if(this.cdTipoMaquina=='04' || this.cdTipoMaquina=='06' ){
                                                    if(val==0){
                                                        return false
                                                    }else{
                                                        return true
                                                    }
                                                }else{
                                                    return true
                                                } 

                                        }
                                }                        
                    
                    
                    
                    )} ,
                    
                    


                    numRupturas: { required: helpers.withMessage('Informe o número de rupturas', required)} , 
                    //metragem: { required: helpers.withMessage('Informe a metregsam produzida na SSM', required)} , 
                    //idSSM: { required: helpers.withMessage('Informe o ID SSM', required)} , 	
                    //numeroTrocas: { required: helpers.withMessage('Informe o o número de trocas de fio', required)} , 
                    //ehTroca: { required: helpers.withMessage('Informe se houve troca de fio', required)} , 
                    //horaInicialTrocaFio: { required: helpers.withMessage('Informe a hora inicial da troca de fio', required)} , 
                    //horaFinalTrocaFio: { required: helpers.withMessage('Informe a hora final da troca de fio', required)} , 	
                    //nomeFornElastano: { required: helpers.withMessage('Informe o nome do fornecedor de elastano', required)} , 	
                    //nomeFornPoliester: { required: helpers.withMessage('Informe o nome do fornecedor de poliester', required)} , 	
                    //numeroSerie: { required: helpers.withMessage('Informe o numero de série da máquina', required)} , 
                    //localFisico: { required: helpers.withMessage('Informe o local físico da máquina', required)} , 
                    //ehReprocesso: { required: helpers.withMessage('Informe se houve reprocesso na SSM', required)} , 	
                    //obs: { required: helpers.withMessage('Informe a observação', required)} , 	
                    alfaTorcao: { required: helpers.withMessage('Informe o alfaTorcao de torção', required)} , 
                    //tpm: { required: helpers.withMessage('Informe as torcoes por minuto', required)} , 				
                    //tituloNominal: { required: helpers.withMessage('Informe o título do fio', required)} , 	
                    operador: { required: helpers.withMessage('Informe o operador da maquina', 
                    
                    
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
                    rpmCAR: { required: helpers.withMessage('Informe o RPM da cardinha', required)} , 	
                    pton: { required: helpers.withMessage('Informe o numero de pontos grossos e muito curtos (neps)', required)} , 
                    ptos: { required: helpers.withMessage('Informe o numero de pontos grossos e curtos (neps)', required)} , 	
                    ptol: { required: helpers.withMessage('Informe o numero de pontos grossos e longos maior (long)', required)} , 
                    ptof: { required: helpers.withMessage('Informe o número de pontos finos', required)} , 
                    mo: { required: helpers.withMessage('Informe o moiré', required)} , 		
                    cpvsl: { required: helpers.withMessage('Informe a diferença de título do início da producção (GROSSA)', required)} , 	
                    cmvsl: { required: helpers.withMessage('Informe a diferença de título do início da producção (FINA)', required)} , 	
                    ccpc: { required: helpers.withMessage('Informe a difernça de título durante a produção (GROSSA)', required)} , 		
                    ccmc:  { required: helpers.withMessage('Informe a diferença de título durante a produção (FINA)', required)} , 	
                    jp: { required: helpers.withMessage('Informe o núnero de emendas defeituosas (ponto grosso na emenda)', required)} , 		
                    jm: { required: helpers.withMessage('Informe o núnero de emendas defeituosas (ponto fino na emenda)', required)} , 	 
                    cvp: { required: helpers.withMessage('Informe o índice de sujeira', required)} , 		
                    cvm: { required: helpers.withMessage('Informe o índice de irregularidade', required)} , 		
                    prob1: { required: helpers.withMessage('Informe a eficiência do carrinho 01', required)} , 	
                    prob2: { required: helpers.withMessage('Informe a eficiência do carrinho 02', required)} , 
                    prob3: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} ,                      
                    estiragem: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    qtdeFitas: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    d_percent: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    cv: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    cvIn: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    pg: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    a_percent: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    t25: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    t20: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    t15: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    t125: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    t120: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    t115: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    t225: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    t220: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                    t215: { required: helpers.withMessage('Informe a eficiência do carrinho 03', required)} , 
                   
               
                    tensaoBobina: { required: helpers.withMessage('Informe a tensão da bobina', required)} ,  
                   
                    cnat: { required: helpers.withMessage('Informe as rupturas naturais', required)} ,        
                    //prdtur: { required: helpers.withMessage('Informe o prdtur', required)} ,       
                    //tituloReal:{ required: helpers.withMessage('Informe o título da ficha técnica', required)}     
                
            }

        },  
        computed:{             
            ...mapState(['usuarioSistema']), 
           
        },

        methods:{ 
            setaPesquisa(e) { 

                

                if (e.tipo == "item") {
                    this.producaoFiacao.item= '0' + e.obj.codigo;
                    this.producaoFiacao.dsItem = e.obj.material.descricao;
                }

                if (e.tipo == "operador") {
                    this.producaoFiacao.operador =  e.obj.codigo;
                    this.producaoFiacao.dsOperador = e.obj.nome;
                }
 

            },  
            
            validaChave(){ 

                let chaveCompleta = true;
                
                if  (!(this.localFisico==null || this.localFisico=='')){
                    this.localFisico = this.localFisico.padStart(3, '0'); 
                }
                
                this.producaoFiacao.localFisico = this.localFisico; 
                if ((this.cdTipoMaquina==null || this.cdTipoMaquina =='' || this.cdTipoMaquina =='00') && chaveCompleta){

                    this.apiDisplayMensagem("Informe um tipo de máquina valido.");
                    chaveCompleta = false;
               

                    //console.log('this.producaoFiacao.dataProducao nao nulo >> ' + this.producaoFiacao.dataProducao);
                } 

                if ((this.producaoFiacao.dataProducao==null || this.producaoFiacao.dataProducao=='') && chaveCompleta){
 
                    chaveCompleta = false;
                } else{
                    if(chaveCompleta){
                        if(!this.validaDataProducao(this.producaoFiacao.dataProducao)){ 
                            chaveCompleta = false;
                        }
                    }
                   

                } 

                //console.log('ValidaChave 002');
                //console.log(chaveCompleta)

                if ((this.producaoFiacao.turno==null   || this.producaoFiacao.turno=='') && chaveCompleta){
                  //console.log('this.producaoFiacao.turno  nao nulo >> ' + this.producaoFiacao.turno);
                //} else{
                   //console.log('this.producaoFiacao.turno nulo');
                    chaveCompleta = false;
                } 

                //console.log('ValidaChave 003');
                //console.log(chaveCompleta)

                if ((this.producaoFiacao.lado==null   ||  this.producaoFiacao.lado=='') && chaveCompleta){  
                    chaveCompleta = false;
                }       
                //console.log('ValidaChave 004');
                //console.log(chaveCompleta)
                //console.log(this.producaoFiacao.localFisico)
                
                if ((this.producaoFiacao.localFisico==null   ||  this.producaoFiacao.localFisico=='') && chaveCompleta){
 
                    chaveCompleta = false;
                    //console.log('ValidaChave 00544'); 
                    //console.log(chaveCompleta)  

                } else{ 
                 
                    if(this.localFisico.length!=3 && chaveCompleta)  {
                        chaveCompleta = false;

                       //console.log('ValidaChave 00544333'); 
                        //console.log(chaveCompleta)

                    }
                }            
                //console.log('ValidaChave 005'); 
               //console.log(chaveCompleta)     

                if ((this.producaoFiacao.codigoMaquina==null   ||  this.producaoFiacao.codigoMaquina=='') && chaveCompleta){
                     //console.log('this.producaoFiacao.codigoMaquina  nao nulo >> ' + this.producaoFiacao.codigoMaquina);
                //} else{
                    //console.log('this.producaoFiacao.codigoMaquina nulo');
                    chaveCompleta = false;
                }     
                //console.log('ValidaChave 006');
                //console.log(chaveCompleta)

                if ((this.producaoFiacao.horaInicio==null || this.producaoFiacao.horaInicio=='') && chaveCompleta){ 
                    chaveCompleta = false;
                }   


                //console.log('ValidaChave 007');
                //console.log(chaveCompleta)

                return chaveCompleta;
            },

            validaChaveHoraIni(){ 

                    let chaveCompleta = true;

                    if  ( this.localFisico==null || this.localFisico=='' ){
                        chaveCompleta = false; 
                    } 
                   //console.log('ValidaChave 00a');
                   //console.log(chaveCompleta)
                    
                    if ((this.cdTipoMaquina==null || this.cdTipoMaquina =='' || this.cdTipoMaquina =='00') && chaveCompleta){ 
                        chaveCompleta = false; 
                    } 
                    //console.log('ValidaChave 00b');
                   //console.log(chaveCompleta)
                    if ((this.producaoFiacao.dataProducao==null || this.producaoFiacao.dataProducao=='') && chaveCompleta){ 
                        chaveCompleta = false;
                    }  
                    //console.log('ValidaChave 00c');
                   //console.log(chaveCompleta)
                    if ((this.producaoFiacao.turno==null   || this.producaoFiacao.turno=='') && chaveCompleta){                 
                        chaveCompleta = false;
                    }  
                    //console.log('ValidaChave 00d');
                   //console.log(chaveCompleta)
                    if ((this.producaoFiacao.lado==null   ||  this.producaoFiacao.lado=='') && chaveCompleta){  
                        chaveCompleta = false;
                    }     
                    //console.log('ValidaChave 00e');
                   //console.log(chaveCompleta)
                    if ((this.producaoFiacao.codigoMaquina==null   ||  this.producaoFiacao.codigoMaquina=='') && chaveCompleta){ 
                        chaveCompleta = false;
                    }     

                    //console.log('validaChaveHoraIni')
                    //console.log(chaveCompleta)


                    return chaveCompleta;
            },




            async validaExistenciaProducao(){  
 
                    let retorno = -1;
                    let dataFormatada="";
                    dataFormatada =  this.producaoFiacao.dataProducao.substring(0,4) + this.producaoFiacao.dataProducao.substring(5,7)  + this.producaoFiacao.dataProducao.substring(8,10)  ;                  
                    let url =`${process.env.VUE_APP_BASE_URL}/producao/numApontamentos/filial/${this.$store.state.usuarioSistema.idfil}/maquina/${this.producaoFiacao.codigoMaquina}/dataProd/${dataFormatada}/turno/${this.producaoFiacao.turno}/lado/${this.producaoFiacao.lado}`;
        
                    //console.log(url) 

                    await this.axios.get(url,this.apiTokenHeader())
                    .then(response => {     
                       
                        response.data.forEach(element => { 
                            retorno =  element.NUMREG;   
                        })  ;     

                    })        
                    .catch(error => {  
                        
                        console.log("Erro Turno: ", error); 
                        this.apiDisplayMensagem(error.response.data);

                    });

                    return retorno;

            }, 

            
            validaDataProducao(pData){ 

                // Obtém a data atual
                let dataAtual = new Date();

                // Obtém as partes individuais da data atual
                let ano = dataAtual.getFullYear();
                let mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
                let dia = ("0" + dataAtual.getDate()).slice(-2);

                // Formata a data atual como "yyyy-mm-dd"
                let dataAtualFormatada = `${ano}-${mes}-${dia}`;
                let retorno = true;
      

                //console.log('Datas');
                //console.log(dataAtualFormatada);
                //console.log(pData);

                 if( pData > dataAtualFormatada ){
                    retorno = false;
                 }

                return retorno
 

            },
  

            calcEficiencia(){

                //console.log('calcEficiencia()')

                if(this.cdTipoMaquina != "00"){
                  this.calcEfic(this.cdTipoMaquina);
                 }
            }, 


           async calcEfic(tpMaq){
  
                    let hrIni;
                    let hrfim; 
                    //console.log('calcEficiencia() aaaaa')
                
                    if (this.dadosCalcEfic()===true) {

                        //console.log('calcEficiencia() bbbbbbbbb')

                        hrIni = parseInt(this.producaoFiacao.horaInicio.substring(0,2) + this.producaoFiacao.horaInicio.substring(3,5)) ;
                        hrfim = parseInt(this.producaoFiacao.horaFinal.substring(0,2)  + this.producaoFiacao.horaFinal.substring(3,5)) ;

                        const resposta = await  this.apiDadosCalcEfic(this.producaoFiacao.item,hrIni,hrfim);  

                        if (resposta === true) {
                            this.eficPorTipoMaquina(tpMaq);
                         }

                    }   
                
            },
 

            eficPorTipoMaquina(tpMaq){

                //console.log("calcEfic BBBBB");
                //console.log(this.tituloCalculo);
                
                let nPH;
                let nPTH;
                let nPRAP;

                let VTPP;
                let VPMM;
                let PT;
                let PTT;
                let eFIC04 ;

                let vT;
                let vPT;
                let EficR;                
                
                let torcao;
                let producaoKgH;

                if(tpMaq=='04'){  //OPEN ENDs 
                
                    VTPP = 0;
                    if(this.producaoFiacao.alfaTorcao > 0 && this.tituloCalcEfic > 0 )  {                                 
                        VTPP =  Math.sqrt(this.tituloCalcEfic )*this.producaoFiacao.alfaTorcao ;
                    }    
                    //console.log('VTPP');
                    //console.log(VTPP);

                    VPMM=0;
                    if(this.producaoFiacao.rpm > 0 && VTPP > 0){
                        VPMM = this.producaoFiacao.rpm/(VTPP*39.37)   
                    }
                    //console.log(VPMM);
                    PT=0;
                    if(this.tituloCalcEfic > 0 && this.producaoFiacao.numeroFusos  > 0 )  {    
                        PT = (VPMM*0.5905*60*this.producaoFiacao.numeroFusos )/(this.tituloCalcEfic*1000) 
                    }
                    //console.log(PT);                      
                    PTT = PT * this.tempoDuracao;
                   //console.log(PTT);      
                    if(this.producaoFiacao.qtdeProduzida > 0 && PTT>0)  {    
                        eFIC04  = (this.producaoFiacao.qtdeProduzida /PTT)*100 ;
                        eFIC04 = Number(eFIC04.toFixed(2));
                        
                    } 
                    //console.log(eFIC04);                                  
                    if(eFIC04>0){
                        this.eficReal = eFIC04 ;
                    }else{
                        this.eficReal = 0 ;
                    }


               
                }


                if(tpMaq=='06'){   // CONICALEIRAS

                    nPH = 0; 
                    if(this.producaoFiacao.rpm > 0 && this.producaoFiacao.numeroFusos > 0 )  {
                        nPH = this.producaoFiacao.rpm * 60 * this.producaoFiacao.numeroFusos * 0.59;   // producao hora         
                    
                    }
                    //console.log(nPH);
                
                    nPTH=0;
                    if(this.tituloCalcEfic > 0  )  {
                        nPTH = nPH/(this.tituloCalcEfic *1000) ;
                    } else{
                        nPTH = 0; 
                    }   
                    //console.log(nPTH);

                    nPRAP = 0;
                    if(nPTH > 0  ) { 
                        nPRAP  =  nPTH * this.tempoDuracao; // PRODUCAO HORA DO APONTAMENTO
                        //console.log(nPRAP);
                        nPRAP = (this.producaoFiacao.qtdeProduzida/ nPRAP)*100 ;
                        nPRAP = Number(nPRAP.toFixed(2));
                        //nPRAP =  Number( ((this.producaoFiacao.numeroFusos / nPRAP)*100 ).toFixed(2))
                    }  
                    if(nPRAP>0){
                        this.eficReal = nPRAP;
                    }else{
                        this.eficReal = 0;
                    }
                    
                    //console.log(nPRAP);
                    
                }   

 
                if(tpMaq=='02'){   // cardas

                    //console.log('Eficiencia Cardas');

                    vT = 0;                     
                    if(this.producaoFiacao.rpm > 0 && this.tituloCalculo> 0 )  {
                        vT =((this.producaoFiacao.rpm * 60 * 0.59)/this.tituloCalculo ) /1000;   // producao hora  
                        this.prodKgh = ((this.producaoFiacao.rpm * 60 * 0.59)/this.tituloCalculo) /1000; 
                        this.prodKgh  = Number(this.prodKgh.toFixed(2));
                    }
                    //console.log(vT);

                    vPT=0;
                    if(this.tempoDuracao> 0  )  {
                        vPT = vT *  this.tempoDuracao;                     
                    }   
                    //console.log(vPT);
                    //console.log(this.producaoFiacao.qtdeProduzida);

                    EficR=0;
                    if(vPT >0){
                        EficR = (this.producaoFiacao.qtdeProduzida / vPT) * 100  
                        EficR = Number(EficR.toFixed(2));
                    }

                     

                    if(EficR>0){
                        this.eficReal = EficR ;
                    }else{
                        this.eficReal = 0;
                    }

                    
                    //console.log(EficR);

                }

                

                if(tpMaq=='03'){   // passadores


                        producaoKgH=0;
                        if(this.producaoFiacao.rpm > 0  ){
                            producaoKgH = this.producaoFiacao.rpm*60*0.5905/this.tituloCalculo/1000
                        }

                        //console.log('producaoKgH');
                        //console.log(producaoKgH);   

                        //console.log(PT);                      
                        PTT = producaoKgH * this.tempoDuracao;  

                        EficR=0;
                        if(PTT >0){
                            EficR = (this.producaoFiacao.qtdeProduzida / PTT) * 100  
                            EficR = Number(EficR.toFixed(2));
                        }

                        if(EficR>0){
                            this.eficReal = EficR ;
                        }else{
                            this.eficReal = 0;
                        }


                        //console.log(EficR);

               }                                   




                
                if(tpMaq=='05'){   // Macaroqueiras

                    torcao = 0;
                    if(this.producaoFiacao.alfaTorcao > 0 && this.tituloCalculo > 0 )  {                                 
                        torcao =  Math.sqrt(this.tituloCalculo )*this.producaoFiacao.alfaTorcao ;
                    }   
                    
                    //console.log('torcao');
                    //console.log(torcao);                    

                    producaoKgH=0;
                    if(this.producaoFiacao.rpm > 0 && torcao > 0 && this.producaoFiacao.numeroFusos  > 0  ){
                        producaoKgH = (this.producaoFiacao.rpm/torcao/39.37) *(0.5905/this.tituloCalculo ) *this.producaoFiacao.numeroFusos*60/1000 
                    }
                    
                    //console.log('producaoKgH');
                    //console.log(producaoKgH);   

                    //console.log(PT);                      
                    PTT = producaoKgH * this.tempoDuracao;  

                    EficR=0;
                    if(PTT >0){
                        EficR = (this.producaoFiacao.qtdeProduzida / PTT) * 100  
                        EficR = Number(EficR.toFixed(2));
                    }

                    if(EficR>0){
                        this.eficReal = EficR ;
                    }else{
                        this.eficReal = 0;
                    }


                    //console.log(EficR);

                }                                   

            },

            dadosCalcEfic(){

                let dEfic = true;  

                this.artigoSap      = '';  
                this.tituloCalcEfic = 0;  
                this.tempoDuracao =0;
                this.classeItem =0;


                if ((this.producaoFiacao.horaInicio==null || this.producaoFiacao.horaInicio=='') && dEfic){
                    dEfic = false;
                }    

                if ((this.producaoFiacao.horaFinal==null || this.producaoFiacao.horaFinal=='') && dEfic){ 
                    dEfic = false;
                }

                if ((this.producaoFiacao.codigoMaquina==null || this.producaoFiacao.codigoMaquina=='') && dEfic){ 
                    dEfic = false;
                }     

                if ((this.producaoFiacao.item==null || this.producaoFiacao.item=='') && dEfic){ 
                    dEfic = false;
                } 

                return dEfic
                } ,

            
               
            async exclusao() {

                    /// EXCLUSAO ////

                    //let url = `${process.env.VUE_APP_BASE_URL}/tipomaquina/filial/${this.$store.state.usuarioSistema.idfil}/codigo/${this.codigo}`  
                    let dataFormatada="";
                    dataFormatada =  this.producaoFiacao.dataProducao.substring(0,4) + this.producaoFiacao.dataProducao.substring(5,7)  + this.producaoFiacao.dataProducao.substring(8,10)  ;
                    let horaFormatada = parseInt(this.producaoFiacao.horaInicio.substring(0,2) + this.producaoFiacao.horaInicio.substring(3,5)); 
                    let url =`${process.env.VUE_APP_BASE_URL}/producao/filial/${this.$store.state.usuarioSistema.idfil}/codigo/${this.producaoFiacao.codigoMaquina}/turno/${this.producaoFiacao.turno}/data/${dataFormatada}/lado/${this.producaoFiacao.lado}/hora/${horaFormatada}`

                    //console.log('Delecao')
                    //console.log(url)
                      
                    if (this.tipoOperacao == 'E' && this.simNaoRetorno == 'S') {  


                            //console.log('Delecao 22222')
                            //await this.axios.delete(
                                //url,
                                //JSON.stringify(this.tipoMaquinaDAO),
                                //{
                                //headers: { "Content-Type": "application/json" }
                                //}
                                //this.apiTokenHeader({ "Content-Type": "application/json" })
                            //)
                            this.axios.delete(url,this.apiTokenHeader() )
                            .then(response => {
                               // this.haSucesso = true
                                //this.mensagemSucesso = response.data 

                                //console.log('Delecao 33333')
                                this.resetarForm();
                                this.apiDisplayMensagemSucesso(response.data  )
                            })
                            .catch(error => {
                                console.log("Erro: ", error.response.data);
                                //this.haErros = true
                                //this.mensagemErro = error.response.data
                                this.apiDisplayMensagem(error.response.data);  
                            }); 

                    }
                    
                    return true;

            },


            async buscaItem(){
                
                //console.log(  'ssss2222' );

                //console.log(  this.producaoFiacao.item );
                //console.log(this.producaoFiacao.item=='');
                
                this.producaoFiacao.dsItem='';
                if  (!(this.producaoFiacao.item==null || this.producaoFiacao.item=='')){
                    this.producaoFiacao.item= this.producaoFiacao.item.padStart(7, '0'); 
                }                
                this.apiPesquisaParam('item', this.producaoFiacao.item, this.producaoFiacao)
                
                
                const resposta = await this.buscaFichaTecnica();       

                if (!(resposta === true) ){
                   console.log('Ficha Técnica não cadastrada.' );      
                } 


            },

            async buscaFichaTecnica(){  

                let ok = false;

                //console.log('buscaFichaTecnica');
                //console.log(this.cdTipoMaquina);
                //console.log(this.tipoMaquinaProps);

                if  (!(this.producaoFiacao.item==null || this.producaoFiacao.item=='')){
                    
                        this.producaoFiacao.item= this.producaoFiacao.item.padStart(7, '0');                        
                        
                        let url =  `${process.env.VUE_APP_BASE_URL}/fichatecnica/filial/${this.$store.state.usuarioSistema.idfil}/item/${this.producaoFiacao.item}`;  
                        this.tipoMaquinaItem='';

                        if(this.cdTipoMaquina=='02' || this.cdTipoMaquina=='03' || this.cdTipoMaquina=='05' 
                        || this.tipoMaquinaProps =='02' || this.tipoMaquinaProps =='03' ||     this.tipoMaquinaProps =='05'  
                        ){
                        
                                this.producaoFiacao.tituloCadastro=0;
                                this.producaoFiacao.tituloReal=0;
                                this.producaoFiacao.tituloNominal=0; 
                            

                                //console.log(url);
                                await this.axios.get(url,this.apiTokenHeader())
                                .then(response => {        
                
                                    this.resultado = response.data;
                                    //console.log(  'sssssddd titulo' );
                                    //console.log(response.data);


                                    if (this.resultado.titulo != null && this.resultado.titulo != ''){                            
                                            this.producaoFiacao.tituloCadastro=this.resultado.titulo;
                                            this.producaoFiacao.tituloReal=this.resultado.titulo;
                                            this.producaoFiacao.tituloNominal=this.resultado.titulo;
                                        
                                            this.tituloCalculo=this.resultado.titulo;
                                            ok = true;
                                    } else{

                                            this.producaoFiacao.tituloCadastro=0;
                                            this.producaoFiacao.tituloReal=0
                                            this.producaoFiacao.tituloNominal=0;
                                            this.tituloCalculo=0;
                                            ok = true;
                                    }
                                    if (this.resultado.tipoMaquina != null && this.resultado.tipoMaquina != ''){ 
                                         this.tipoMaquinaItem = this.resultado.tipoMaquina;
                                    }     
                                    

                                    //console.log('this.tituloCalculo')
                                    //console.log(this.tituloCalculo)


                                })        
                                .catch(error => {  
                                    
                                    console.log("Erro: ", error);
                                    //this.mensagemErro = error; 
                                    //this.haErros = true ;
                                    this.apiDisplayMensagem(error.response.data); 

                                });               
                        
                        }else{
                            if(this.cdTipoMaquina=='04' || this.cdTipoMaquina=='06'  
                               || this.tipoMaquinaProps =='04' || this.tipoMaquinaProps =='06'    
                            ){

                               

                                
                            }else{ 
                                ok = true;
                            }
                        }
                } else{
                    ok = true;

                }    
                return ok;        
                
            },


 
            async buscaMaquinaPorLocal(){   
 
                let url =  `${process.env.VUE_APP_BASE_URL}/maquina/filial/${this.$store.state.usuarioSistema.idfil}/local/${this.localFisico}/tpMaq/${this.cdTipoMaquina}`; 

                //console.log(url);
                let retorno = false;
                if(this.cdTipoMaquina!="00" && this.cdTipoMaquina!=""){

                

                        this.producaoFiacao.numeroSerie='';
                        this.producaoFiacao.codigoAbertura='';
                        this.tituloCalculo=0;
                        

                        await this.axios.get(url,this.apiTokenHeader())
                        .then(response => {        
        
                            this.resultado = response.data;   

                            //console.log('Maquinas this.resultado');
                            //console.log(this.resultado);
        
                            if (this.resultado.codigo != null && this.resultado.codigo != ''){
                                
                                this.producaoFiacao.codigoMaquina =  this.resultado.codigo ;  
                                this.cdTipoMaquina  = this.producaoFiacao.codigoMaquina.substring(2,4);  

                                this.configuraExibicao();

                                if(this.resultado.lado=="U" || this.resultado.lado == null || this.resultado.lado == ''){
                                    this.producaoFiacao.lado = "U";
                                    if(this.cdTipoMaquina != '04'){
                                        this.exibeLado = false;
                                    }else{
                                        this.exibeLado = true;    
                                    }
                                }else{

                                    this.exibeLado = true;                        
                                }   
                                

                                //console.log('fusos111')
                                this.numFusos=0;

                                if (this.resultado.numFusos != null && this.resultado.numFusos != ''){
                                    this.numFusos=this.resultado.numFusos;
                                
                                    //console.log('fusos22222')  


                                    //if(this.tipoOperacao=='I'){
                                       
                                          //  if(this.tipoMaquinaProps=='04' || this.tipoMaquinaProps=='06' ) {
                                               
                                           //     this.producaoFiacao.numeroFusos = this.numFusos;
                                         //   } 
                                    //}  

                                    
                                } else{
                                    this.numFusos=0;
                                }   

                                if (this.resultado.numSerie != null && this.resultado.numSerie != ''){          
                                    this.producaoFiacao.numeroSerie=this.resultado.numSerie;
                                } else{
                                    this.producaoFiacao.numeroSerie='';
                                } 
                                
                                if (this.resultado.codigoAbertura != null && this.resultado.codigoAbertura != ''){
                                    this.producaoFiacao.codigoAbertura=this.resultado.codigoAbertura;
                                } else{
                                    this.producaoFiacao.codigoAbertura='';
                                }   



                            //console.log('BuscaMaquina'); 
                                //console.log(this.numFusos);
                            ///console.log(this.producaoFiacao.numeroSerie);
                                ///console.log(this.producaoFiacao.codigoAbertura);

                                //this.mensagemErro = ""; 
                                //this.haErros = false ;

                            
                            }else{
                                
                                this.producaoFiacao.codigoMaquina = "" ;   
                                this.cdTipoMaquina  ="" ;     
                                this.numFusos=0;             
                                this.producaoFiacao.numeroSerie='';
                                this.producaoFiacao.codigoAbertura='';
                                    
                                
                            }                      

                            if (this.resultado.nome != null){
                                this.producaoFiacao.dsMaquina =  this.resultado.nome;  
                            
                            }else{
                                this.producaoFiacao.dsMaquina = "" ;                       
                            }     

                            if(this.tipoMaquinaProps!="99"){
                                this.cdTipoMaquina = this.tipoMaquinaProps; 
                                this.tpMaquinaDesabilitado = true;

                            } else{

                                this.tpMaquinaDesabilitado=false;
                            }  

                            retorno = true;
                        }                
                        )        
                        .catch(error => {  
                            
                            console.log("Erro Turno: ", error);
                            //this.mensagemErro = error; 
                            //this.haErros = true ;
                            this.apiDisplayMensagem(error.response.data);  
                            retorno = false;

                        });
                }else{

                    retorno = true;

                }

                return retorno;



            },
            configuraExibicao(){
 
                  //console.log('configuraExibicao')

                  //console.log(this.cdTipoMaquina) 
                  

                  if(this.tipoOperacao=='I'){ 
 
                     if(this.tipoMaquinaProps=='03'){
                         this.producaoFiacao.qtdeFitas = 6;
                     } 
 
                     if(!isNaN(this.$store.state.usuarioSistema.codigo)){
                             this.producaoFiacao.operador = this.$store.state.usuarioSistema.codigo;
                             this.apiPesquisaParam('operador', this.producaoFiacao.operador, this.producaoFiacao);
                     }   
 
                    if(this.producaoFiacao.tipoMaquinaProps=='04' || this.producaoFiacao.tipoMaquinaProps=='06' ) {
                        this.producaoFiacao.numeroFusos = this.numFusos;
                    } 

 
                 }



                  if(this.cdTipoMaquina=='02'){

                        this.exibeLado=false;
                        this.exibeNumeroFusos=false;                  
                        this.exibeNumRupturas=false;  
                        this.exibeAlfaTorcao=false;
                        this.exibeTpm=false;			
                        this.exibeRpmCAR=false; 
                        this.exibePton=false; 
                        this.exibePtos=false; 
                        this.exibePtol=false; 
                        this.exibePtof=false; 
                        this.exibeMo=false; 	
                        this.exibeCpvsl=false; 	
                        this.exibeCmvsl=false; 
                        this.exibeCcpc=false;		
                        this.exibeCcmc=false;	
                        this.exibeJp=false;  		
                        this.exibeJm =false;
                        this.exibeCvp=false; 	
                        this.exibeCvm=false;		
                        this.exibeProb1=false; 
                        this.exibeProb2=false; 
                        this.exibeProb3=false; 
                        this.exibeTensaoBobina=false;
                        this.exibeCnat=false; 
                        this.exibeEstiragem=false,
                        this.exibeQtdeFitas=false,                    
                        this.exibeD_percent=true;
                        this.exibeCv=true;
                        this.exibeCvIn=true;
                        this.exibePg=true;
                        this.exibeA_percent=true;
                        this.exibeT25=true;
                        this.exibeT20=true;
                        this.exibeT15=true;
                        this.exibeT125=true;
                        this.exibeT120=true;
                        this.exibeT115=true;
                        this.exibeT225=true;
                        this.exibeT220=true;
                        this.exibeT215=true; 

                }


                if(this.cdTipoMaquina=='03'){

                    this.exibeLado=false;
                    this.exibeNumeroFusos=false;                  
                    this.exibeNumRupturas=false;                  
                    this.exibeAlfaTorcao=false;
                    this.exibeTpm=false;			
                    this.exibeRpmCAR=false; 
                    this.exibePton=false; 
                    this.exibePtos=false; 
                    this.exibePtol=false; 
                    this.exibePtof=false; 
                    this.exibeMo=false; 	
                    this.exibeCpvsl=false; 	
                    this.exibeCmvsl=false; 
                    this.exibeCcpc=false;		
                    this.exibeCcmc=false;	
                    this.exibeJp=false;  		
                    this.exibeJm =false;
                    this.exibeCvp=false; 	
                    this.exibeCvm=false;		
                    this.exibeProb1=false; 
                    this.exibeProb2=false; 
                    this.exibeProb3=false; 
                    this.exibeTensaoBobina=false;
                    this.exibeCnat=false; 
                    this.exibeEstiragem=true,
                    this.exibeQtdeFitas=true,                        
                    this.exibeD_percent=false;
                    this.exibeCv=true;
                    this.exibeCvIn=true;
                    this.exibePg=false;
                    this.exibeA_percent=true;
                    this.exibeT25=false;
                    this.exibeT20=false;
                    this.exibeT15=false;
                    this.exibeT125=false;
                    this.exibeT120=false;
                    this.exibeT115=false;
                    this.exibeT225=false;
                    this.exibeT220=false;
                    this.exibeT215=false; 



               }



                  if(this.cdTipoMaquina=='04'){

                    this.exibeLado=true;
                    this.exibeNumeroFusos=true;                  
                    this.exibeNumRupturas=false;   
                    this.exibeAlfaTorcao=true;
                    this.exibeTpm=true;			
                    this.exibeRpmCAR=true; 
                    this.exibePton=true; 
                    this.exibePtos=true; 
                    this.exibePtol=true; 
                    this.exibePtof=true; 
                    this.exibeMo=true; 	
                    this.exibeCpvsl=true; 	
                    this.exibeCmvsl=true; 
                    this.exibeCcpc=true;		
                    this.exibeCcmc=true;	
                    this.exibeJp=true;  		
                    this.exibeJm =true;
                    this.exibeCvp=true; 	
                    this.exibeCvm=true;		
                    this.exibeProb1=true; 
                    this.exibeProb2=true; 
                    this.exibeProb3=true; 
                    this.exibeTensaoBobina=true;
                    this.exibeCnat=true; 
                    this.exibeEstiragem=false,
                    this.exibeQtdeFitas=false,
                    this.exibeD_percent=false;
                    this.exibeCv=false;
                    this.exibeCvIn=false;
                    this.exibePg=false;
                    this.exibeA_percent=false;
                    this.exibeT25=false;
                    this.exibeT20=false;
                    this.exibeT15=false;
                    this.exibeT125=false;
                    this.exibeT120=false;
                    this.exibeT115=false;
                    this.exibeT225=false;
                    this.exibeT220=false;
                    this.exibeT215=false;                    



                  }



                    
                if(this.cdTipoMaquina=='05'){

                        this.exibeLado=false;
                        this.exibeNumeroFusos=true;                  
                        this.exibeNumRupturas=true;                  
                        this.exibeAlfaTorcao=true;
                        this.exibeTpm=false;			
                        this.exibeRpmCAR=false; 
                        this.exibePton=false; 
                        this.exibePtos=false; 
                        this.exibePtol=false; 
                        this.exibePtof=false; 
                        this.exibeMo=false; 	
                        this.exibeCpvsl=false; 	
                        this.exibeCmvsl=false; 
                        this.exibeCcpc=false;		
                        this.exibeCcmc=false;	
                        this.exibeJp=false;  		
                        this.exibeJm =false;
                        this.exibeCvp=false; 	
                        this.exibeCvm=false;		
                        this.exibeProb1=false; 
                        this.exibeProb2=false; 
                        this.exibeProb3=false; 
                        this.exibeTensaoBobina=false;
                        this.exibeCnat=false; 
                        this.exibeEstiragem=false,
                        this.exibeQtdeFitas=false,                        
                        this.exibeD_percent=false;
                        this.exibeCv=false;
                        this.exibeCvIn=false;
                        this.exibePg=false;
                        this.exibeA_percent=false;
                        this.exibeT25=false;
                        this.exibeT20=false;
                        this.exibeT15=false;
                        this.exibeT125=false;
                        this.exibeT120=false;
                        this.exibeT115=false;
                        this.exibeT225=false;
                        this.exibeT220=false;
                        this.exibeT215=false; 



                   }






                    if(this.cdTipoMaquina=='06'){

                        this.exibeLado=false;
                        this.exibeNumeroFusos=true;  
                        this.exibeNumRupturas=false;                  
                        this.exibeAlfaTorcao=false;
                        this.exibeTpm=false;			
                        this.exibeRpmCAR=false; 
                        this.exibePton=true; 
                        this.exibePtos=true; 
                        this.exibePtol=true; 
                        this.exibePtof=true; 
                        this.exibeMo=true; 	
                        this.exibeCpvsl=true; 	
                        this.exibeCmvsl=true; 
                        this.exibeCcpc=true;		
                        this.exibeCcmc=true;	
                        this.exibeJp=true;  		
                        this.exibeJm =true;
                        this.exibeCvp=true; 	
                        this.exibeCvm=true;		
                        this.exibeProb1=false; 
                        this.exibeProb2=false; 
                        this.exibeProb3=false; 
                        this.exibeTensaoBobina=true;
                        this.exibeCnat=true; 
                        this.exibeEstiragem=false,
                        this.exibeQtdeFitas=false,                        
                        this.exibeD_percent=false;
                        this.exibeCv=false;
                        this.exibeCvIn=false;
                        this.exibePg=false;
                        this.exibeA_percent=false;
                        this.exibeT25=false;
                        this.exibeT20=false;
                        this.exibeT15=false;
                        this.exibeT125=false;
                        this.exibeT120=false;
                        this.exibeT115=false;
                        this.exibeT225=false;
                        this.exibeT220=false;
                        this.exibeT215=false;    

                  }




            },
 
            async submitForm() {    

                    //console.log('this.submitForm')  
                     
                    this.haErros = false
                    this.haSucesso = false  
                    this.mensagemSucesso = ''
                    this.mensagemErro = ''  
                      

                    //console.log('submit')
                    //console.log(this.producaoFiacao.tituloCadastro)
                    //console.log(this.producaoFiacao.tituloReal)
                    //console.log(this.producaoFiacao.tituloNominal)


                    const isFormCorrect = await this.v$.$validate()  
                    
                    if (isFormCorrect)  {

                        if(this.validaChave()) { 

                            //if(await this.validaDatas()){
                        
                                   let url = `${process.env.VUE_APP_BASE_URL}/producao`  ;
                            

                                    this.producaoFiacaoDao =
                                    {                                
                                        "idfil"                : this.$store.state.usuarioSistema.idfil,
                                        "codigoMaquina"        : this.producaoFiacao.codigoMaquina  ,             
                                        "dataProducao"         : this.$moment(this.producaoFiacao.dataProducao).format("DD/MM/YYYY"),
                                        "turno" 	           : this.producaoFiacao.turno 	    ,
                                        "horaInicio"  	       : parseInt(this.producaoFiacao.horaInicio.substring(0,2) + this.producaoFiacao.horaInicio.substring(3,5)),
                                        "lado"	  	           : this.producaoFiacao.lado	    ,
                                        "horaFinal"  	       : parseInt(this.producaoFiacao.horaFinal.substring(0,2) + this.producaoFiacao.horaFinal.substring(3,5))      ,
                                        "item"   	           : this.producaoFiacao.item.padStart(7, '0'), 
                                        "qtdeProduzida"        : this.producaoFiacao.qtdeProduzida  ,    
                                        "eficiencia" 	       : this.producaoFiacao.eficiencia     ,
                                        "quilosHora"	       : this.producaoFiacao.quilosHora	    ,
                                        "codigoAbertura"       : this.producaoFiacao.codigoAbertura	,
                                        "loteProducao"	       : this.producaoFiacao.loteProducao.padStart(10, '0'),
                                        "tituloCadastro"       : this.producaoFiacao.tituloCadastro, 		
                                        "cdFornecPoliester"    : this.producaoFiacao.cdFornecPoliester,
                                        "cdFornecElastano"     : this.producaoFiacao.cdFornecElastano  ,
                                        "lotePoliester"	       : this.producaoFiacao.lotePoliester     ,
                                        "loteElastano"	       : this.producaoFiacao.loteElastano      ,
                                        "cor"		           : this.producaoFiacao.cor	       ,	
                                        "rpm"		           : this.producaoFiacao.rpm	       ,
                                        "numeroFusos"	       : this.producaoFiacao.numeroFusos       ,
                                        "numRupturas"       : this.producaoFiacao.numRupturas    ,
                                        "metragem"	           : this.producaoFiacao.metragem	       ,
                                        "idSSM"		           : 9999999	       ,
                                        "numeroTrocas"	       : this.producaoFiacao.numeroTrocas      ,
                                        "ehTroca"	           : this.producaoFiacao.ehTroca	       ,
                                        "horaInicialTrocaFio"  : this.producaoFiacao.horaInicialTrocaFio,
                                        "horaFinalTrocaFio"    : this.producaoFiacao.horaFinalTrocaFio ,
                                        "nomeFornElastano"     : this.producaoFiacao.nomeFornElastano,	
                                        "nomeFornPoliester"    : this.producaoFiacao.nomeFornPoliester,	 
                                        "numeroSerie"	       : this.producaoFiacao.numeroSerie,	
                                        "localFisico"	       : this.producaoFiacao.localFisico,	
                                        "ehReprocesso"	       : this.producaoFiacao.ehReprocesso,	
                                        "obs" 		           : this.producaoFiacao.obs 	 ,
                                        "alfaTorcao"	       : this.producaoFiacao.alfaTorcao	  ,
                                        "tpm"		           : this.producaoFiacao.tpm	,		
                                        "tituloNominal"	       : this.producaoFiacao.tituloNominal,	
                                        "operador"	           : this.producaoFiacao.operador.padStart(5, '0'),
                                        "rpmCAR"	           : this.producaoFiacao.rpmCAR  ,
                                        "pton"		           : this.producaoFiacao.pton ,
                                        "ptos"		           : this.producaoFiacao.ptos,
                                        "ptol"		           : this.producaoFiacao.ptol,
                                        "ptof"		           : this.producaoFiacao.ptof,
                                        "mo"		           : this.producaoFiacao.mo	 ,
                                        "cpvsl"		           : this.producaoFiacao.cpvsl,
                                        "cmvsl"		           : this.producaoFiacao.cmvsl ,
                                        "ccpc"		           : this.producaoFiacao.ccpc   ,
                                        "ccmc"		           : this.producaoFiacao.ccmc  ,
                                        "jp"		           : this.producaoFiacao.jp	   ,
                                        "jm"		           : this.producaoFiacao.jm	   ,
                                        "cvp"		           : this.producaoFiacao.cvp  ,
                                        "cvm"		           : this.producaoFiacao.cvm,	
                                        "prob1"		           : this.producaoFiacao.prob1,
                                        "prob2" 	           : this.producaoFiacao.prob2, 
                                        "prob3" 	           : this.producaoFiacao.prob3, 
                                        "tensaoBobina"	       : this.producaoFiacao.tensaoBobina,
                                        "cnat"        	       : this.producaoFiacao.cnat,        
                                        "prdtur"      	       : this.producaoFiacao.prdtur,      
                                        "tituloReal"           : this.producaoFiacao.tituloReal  ,  
                                        "estiragem"            : this.producaoFiacao.estiragem  ,  
                                        "qtdeFitas"            : this.producaoFiacao.qtdeFitas  ,  
                                        "d_percent"            : this.producaoFiacao.d_percent  ,  
                                        "cv"                   : this.producaoFiacao.cv  ,  
                                        "cvIn"                 : this.producaoFiacao.cvIn  ,  
                                        "pg"                   : this.producaoFiacao.pg  ,  
                                        "a_percent"            : this.producaoFiacao.a_percent  ,  
                                        "t25"                  : this.producaoFiacao.t25  ,  
                                        "t20"                  : this.producaoFiacao.t20  ,  
                                        "t15"                  : this.producaoFiacao.t15  ,  
                                        "t125"                 : this.producaoFiacao.t125  ,  
                                        "t120"                 : this.producaoFiacao.t120  ,   
                                        "t115"                 : this.producaoFiacao.t115  ,  
                                        "t225"                 : this.producaoFiacao.t225  ,  
                                        "t220"                 : this.producaoFiacao.t220  ,  
                                        "t215"                 : this.producaoFiacao.t215     

                                    }  

                                    if (this.tipoOperacao=="I") {  
                                            
                                            //console.log('POST');
                                            await this.axios.post(
                                                url,
                                                JSON.stringify(this.producaoFiacaoDao),
                                               // {
                                               // headers: { "Content-Type": "application/json" }
                                              //  }
                                              this.apiTokenHeader({ "Content-Type": "application/json" })
                                            )
                                            .then(response => {
                                                this.configuraCampos('A' )  
                                                //this.mensagemSucesso = 'Produção inserida com sucesso.' 
                                                this.tipoOperacao = 'A';
                                                //this.retorno = response.data;                                          
                                                //this.haSucesso = true ;

                                                this.apiDisplayMensagemSucesso('Produção inserida com sucesso.'  )


                                                this.maquina.codigo = JSON.stringify(response.data);   
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
                                                            JSON.stringify(this.producaoFiacaoDao),
                                                            //{
                                                            //headers: { "Content-Type": "application/json" }
                                                            //}
                                                            this.apiTokenHeader({ "Content-Type": "application/json" })
                                                        )
                                                        .then(response => { 
                                                            console.log(response.data);
                                                            this.apiDisplayMensagemSucesso('Produção atualizada com sucesso.'  )

                                                        })
                                                        .catch(error => { 
                                                            console.log("Erro: ", error.response.data);
                                                            //this.haErros = true
                                                            //this.mensagemErro = error.response.data
                                                            this.apiDisplayMensagem(error.response.data);  
                                                        });
                                                }  

                                        }  
                           // }
                        }

                    } else{ 
                        return 
                    } 

            },
            async buscaByChave(){  
 
                let bHoraIni = false;

                if(this.tipoOperacao=='I' && this.validaChaveHoraIni()){ 

                    const tot =  await this.validaExistenciaProducao();
                    //console.log(tot);


                    if(tot<1){ 
                        bHoraIni = true;
                        if(this.producaoFiacao.turno=="A"){
                            this.producaoFiacao.horaInicio=this.$store.state.turnoFormatado.horaIniA 
                        }else if(this.producaoFiacao.turno=="B"){
                            this.producaoFiacao.horaInicio=this.$store.state.turnoFormatado.horaIniB 
                        }else if(this.producaoFiacao.turno=="C"){
                            this.producaoFiacao.horaInicio=this.$store.state.turnoFormatado.horaIniC 
                        }  

                    }    

                }    


                if(this.validaChave()){          
                   
                    this.mensagemErro = ''; 
                    this.haErros = false ;
         
                    if(await this.validaDatasPopUp()) {        
                        
                          const resposta = await this.populaForm();    

                          if ( resposta === true ){ 

                                //console.log('BuscaChave' );      
                               
                                if(this.tipoOperacao=='I' && bHoraIni){

                                    if ((this.producaoFiacao.horaFinal==null || this.producaoFiacao.horaFinal=='')  ){ 
                                        
                                        if(this.producaoFiacao.turno=="A"){
                                            this.producaoFiacao.horaFinal=this.$store.state.turnoFormatado.horaFimA 
                                        }else if(this.producaoFiacao.turno=="B"){
                                            this.producaoFiacao.horaFinal=this.$store.state.turnoFormatado.horaFimB 
                                        }else if(this.producaoFiacao.turno=="C"){
                                            this.producaoFiacao.horaFinal=this.$store.state.turnoFormatado.horaFimC 
                                        }

                                    }    

                                } 

                                if(this.tipoOperacao=='I'){
                                    if(this.tipoMaquinaProps=='04' || this.tipoMaquinaProps=='06' ) {
                                        this.producaoFiacao.numeroFusos = this.numFusos;
                                     } 
                                }  

                          } 
                   } 
                   





















                 
                }
                  
            },

            confirmaDataPosterior(pData){

                 let dataFormatada ;
                 dataFormatada = pData.split('-').reverse().join('/'); 
                 this.exibeModal('validaData','Data do ultimo apontamento da maquina: ' + this.producaoFiacao.codigoMaquina + '/' + this.producaoFiacao.lado    + ' : ' + dataFormatada +  '. Deseja continuar?',['S','N'] ,'sucesso');
            },

            confirmaDataAnterior(pMsg){                
                this.exibeModal('validaDataAnterior',pMsg,['O'],'erro' );
            },            
 
            async validaDatasPopUp(){                
                
                let horaP = '';              
                let dataFormatada="";
                this.dataValidada = false;
                dataFormatada =  this.producaoFiacao.dataProducao.substring(8,10) +  '/'  + this.producaoFiacao.dataProducao.substring(5,7) +  '/' + this.producaoFiacao.dataProducao.substring(0,4);

                //dataFormatada = this.producaoFiacao.dataProducao.split('-').reverse().join('/'); 
                horaP  = parseInt(this.producaoFiacao.horaInicio.substring(0,2) + this.producaoFiacao.horaInicio.substring(3,5))+""  
               
                let urlValidaData =   `${process.env.VUE_APP_BASE_URL}/producao/datas`;    


                this.producaoFiacaoValidacao.idfil = this.$store.state.usuarioSistema.idfil;   
                this.producaoFiacaoValidacao.dataProducao = dataFormatada;                     
                this.producaoFiacaoValidacao.codigoMaquina = this.producaoFiacao.codigoMaquina;
                this.producaoFiacaoValidacao.lado = this.producaoFiacao.lado;
                this.producaoFiacaoValidacao.turno = this.producaoFiacao.turno;
                this.producaoFiacaoValidacao.horaInicio = horaP; 

                if (this.tipoOperacao=="I") {        

                            await this.axios.post(
                            urlValidaData,
                            JSON.stringify(this.producaoFiacaoValidacao),
                            //{
                            //headers: { "Content-Type": "application/json" }
                            //}
                            this.apiTokenHeader({ "Content-Type": "application/json" })
                        )
                        .then(response => {
                        
                            this.retornoDatas = response.data; 
 
                            // this.retornoDatas: Retorna um array com o numero da mensagem e a descricao da mensagem
                            this.dataValidada = true;    

                            if(!(this.retornoDatas[0] == "OK")){   
                                
                               if(this.retornoDatas[0] == "3"){                                     
                                    //Verifica se deseja continuar com uma data posterior maior que 2 dias pois a ultima data ja foi digitada por completo
                                    this.confirmaDataPosterior(this.retornoDatas[1]  );  
                               }  
                            }else{
                                this.dataValidada = true;  
                            } 

                        })
                        .catch(error => { 

                            //console.log("Erro:xxxxxxxxxxx ZZZZ", error.response.data);
                            //this.haErros = true
                            //this.mensagemErro = error.response.data
                            this.apiDisplayMensagem(error.response.data);  
                            
                        });  

                } else{
                     this.dataValidada = true; 
                }
 

                return this.dataValidada
 
            }, 
 


            async validaDatas(){                
                
                let horaP = '';              
                let dataFormatada="";
                let horaFormatada="";
                this.dataValidada = true;
                
                dataFormatada =  this.producaoFiacao.dataProducao.substring(8,10) +  '/'  + this.producaoFiacao.dataProducao.substring(5,7) +  '/' + this.producaoFiacao.dataProducao.substring(0,4);

                //dataFormatada = this.producaoFiacao.dataProducao.split('-').reverse().join('/'); 
                horaP  = parseInt(this.producaoFiacao.horaInicio.substring(0,2) + this.producaoFiacao.horaInicio.substring(3,5))+""  
               
                let urlValidaData = `${process.env.VUE_APP_BASE_URL}/producao/datas`;    


                this.producaoFiacaoValidacao.idfil = this.$store.state.usuarioSistema.idfil;   
                this.producaoFiacaoValidacao.dataProducao = dataFormatada;                     
                this.producaoFiacaoValidacao.codigoMaquina = this.producaoFiacao.codigoMaquina;
                this.producaoFiacaoValidacao.lado = this.producaoFiacao.lado;
                this.producaoFiacaoValidacao.turno = this.producaoFiacao.turno;
                this.producaoFiacaoValidacao.horaInicio = horaP; 

                if (this.tipoOperacao=="I") {          
                    
            
                            await this.axios.post(
                            urlValidaData,
                            JSON.stringify(this.producaoFiacaoValidacao),
                            //{
                            //headers: { "Content-Type": "application/json" }
                            //}
                            this.apiTokenHeader({ "Content-Type": "application/json" })
                        )
                        .then(response => {
                        
                            this.retornoDatas = response.data; 
                       
                            //this.dataValidada = true; 
                            
                            //console.log('FFFFF')
                            //console.log(this.retornoDatas)


                            if(!(this.retornoDatas[0] == "OK" )){   


                                this.dataValidada = false;   
                        
                                     this.msgTemp = ""; 
                                     this.mensagemErro =  "";   
                                     this.haErros = false; 
                                     
                                     // Apontamento com data posterior a ultima data ja apontada 
                                     if(this.retornoDatas[0] == "3"){  
                               
                                        this.producaoFiacao.turno = 'A';                                     

                                        let urlTurno = `${process.env.VUE_APP_BASE_URL}/turno/filial/${this.$store.state.usuarioSistema.idfil}/tur/A`;  
                                     
                                         this.axios.get(urlTurno,this.apiTokenHeader())
                                        .then(response => {        

                                            this.resultado = response.data;  
                                       
                                            horaFormatada = ("0000" + this.resultado.horaInicial).slice(-4) ;        
                                            this.producaoFiacao.horaInicio = horaFormatada.substring(0,2)   + ':' + horaFormatada.substring(2,4);  
 
                                        })        
                                        .catch(error => {  
                                            
                                            console.log("Erro Turno: ", error);
                                            //this.mensagemErro = error; 
                                            //this.haErros = true ;
                                            this.apiDisplayMensagem(error.response.data);

                                        });


                                     }

                                     else {                                
                              
                                        if(this.retornoDatas[0] == "5"){    
                                            // Nao deixa incluir com uma data menor que a ultima lancada
                                            let dataFormatada ;
                                            dataFormatada = this.retornoDatas[1].split('-').reverse().join('/'); 
                                            this.confirmaDataAnterior('Já houve apontamento na maquina ' + this.producaoFiacao.codigoMaquina+ '/' + this.producaoFiacao.lado   + ' em: ' + dataFormatada +  '. Registro nao será gravado.');  
                                        } else if(this.retornoDatas[0] == "2"){    
                                            // Solicita quu se complete o ultimo dia lancado.
                                            this.confirmaDataAnterior(this.retornoDatas[1] + ' da máquina ' + this.producaoFiacao.codigoMaquina+ '/' + this.producaoFiacao.lado  + ' Local fisico: ' +this.producaoFiacao.localFisico + '. Registro nao será gravado.') ; 
                                        }else if(this.retornoDatas[0] == "1"){
                                                this.msgTemp = this.retornoDatas[1] + ' Local fisico: ' +this.producaoFiacao.localFisico;
 
                                                //this.mensagemErro =  this.msgTemp;   
                                                //this.haErros = true; 

                                                this.apiDisplayMensagem(this.msgTemp);  


                                                this.dataValidada = false;                                                        
                                                //this.resetForm = true; 
                                        }else if(this.retornoDatas[0] == "6"){    
                                            this.producaoFiacao.horaInicio='';
                                            this.msgTemp = this.retornoDatas[1];
                                           
                                            //this.mensagemErro =  this.msgTemp;   
                                            //this.haErros = true; 
                                            this.dataValidada = false; 
                                            this.apiDisplayMensagem(this.msgTemp);   

                                        }    
                                        else{ 
                                                
                                                this.msgTemp = this.retornoDatas[1];     
                                                
                                                //this.mensagemErro =  this.msgTemp;   
                                                //this.haErros = true; 
                                                this.dataValidada = false;                                                   

                                                this.apiDisplayMensagem(this.msgTemp);   

                                        }   

                                    }  
                                   
                            }else{
 
                                this.dataValidada = true;  
                            } 

                        })
                        .catch(error => {
                            
                            this.resetForm = true;
                            this.resetarForm();    
                            //console.log("Erro: ZZZZ", error.response.data);
                            //this.haErros = true
                            //this.mensagemErro = error.response.data
                            this.apiDisplayMensagem(error.response.data);   
                       
                            
                        });  

                } else{ 
                    this.dataValidada = true; 
                } 

                if(this.dataValidada && this.tipoOperacao == 'I')  { 
                   this.configuraCampos('I' )  
                }

                //console.log('Saida Validata')
                //console.log(this.haErros )
                //console.log(this.mensagemErro  )  
 
                return this.dataValidada
 
            }, 
 
            async confirmaAcao(resposta) {

                this.simNaoRetorno = resposta 

                if(this.simNaoRetorno == 'O'){  

                    if(this.acao == 'validaDataAnterior' ){
                        this.resetForm = true;
                        this.resetarForm();  
                    }

                } 

                if(this.simNaoRetorno == 'S') {
                    if(this.acao == 'excluir'){

                        this.tipoOperacao = 'E';
                        
                        const exc = await this.exclusao();

                        if(!exc){

                            console.log('Erro ao Excluir')

                        }


                    }else if(this.acao == 'cancelaEdicao')
                    {
                        this.resetarForm();
                    }
                    else if(this.acao == 'pesquisar')
                    {
                        this.$router.push( { name: 'producaofiacaopesquisa',params : {tipoMaquinaProps : this.tipoMaquinaProps}} )
                    }else if(this.acao == 'validaData'   ){
                        this.mensagemErro = ''; 
                        this.haErros = false ; 
                        this.configuraCampos('I'); 

                        const resposta = await this.populaForm();      

                        if (!(resposta === true) ){
                            console.log('Confirmacao' );   
                        } 
                       
                    }
                    
                }else  if(this.simNaoRetorno == 'N') {
                    
                    if(this.acao == 'validaData' ){
                        this.resetForm = true;
                        this.resetarForm();  
                    }
                }


             }       ,     
            resetarForm(){

                //console.log('resetarForm')  

                if(this.simNaoRetorno == 'S' || this.resetForm){ 


                    this.dataAntesReset = this.producaoFiacao.dataProducao;
                    this.turnoAntesReset = this.producaoFiacao.turno;
                   
                    this.producaoFiacao= Object.assign({},this.producaoFiacaoInicial); 
                    this.v$.$reset(); 
                    this.ehInclusao = true; 
                    this.erros= '';
                    this.mensagemSucesso= '';
                    this. mensagemErro= ''; 
                    this.haErros= false;      
                    this.haSucesso= false;
                    this.tipoOperacao = 'I';    
                    
                    if(this.tipoMaquinaProps=='99'){
                        this.cdTipoMaquina = "" ;
                    }
                    

                    this.localFisico = "" ;
                    this.$refs.cdTipoMaquina.focus();  
                    this.resetForm = false;                          
                    
                    this.producaoFiacao.dataProducao = this.dataAntesReset  ;
                    this.producaoFiacao.turno = this.turnoAntesReset;                    
                    
                    if(this.cdTipoMaquina != '04'){
                        this.exibeLado = false;
                    }else{
                        this.exibeLado = true;    
                    }



      
                    this.eficReal='0';

                    this.prodKgh =0;
                    
                    this.configuraCampos('Resetar' )
                }  


            },
            configuraCampos(oper ){

                //console.log('oper');
                //console.log(oper);
                //console.log(tpMaq);

                if(oper=='I'){

                    this.localFisicoDesabilitado = true;
                    //this.maquinaDesabilitado = true;
                    this.dataProducaoDesabilitado = true;
                    this.turnoDesabilitado = true;
                    this.ladoDesabilitado = true;
                    this.horaInicioDesabilitado=true; 
                    //this.tpMaquinaDesabilitado=true;
                    this.itemDesabilitado = false;  

                    if(this.tipoMaquinaProps!="99"){
                        this.cdTipoMaquina = this.tipoMaquinaProps; 
                        this.tpMaquinaDesabilitado = true; 
                    }                   
                    

                }else if(oper=='A'){

                    this.localFisicoDesabilitado = true;
                    //this.maquinaDesabilitado = true;
                    this.dataProducaoDesabilitado = true;
                    this.turnoDesabilitado = true;
                    this.ladoDesabilitado = true;
                    this.horaInicioDesabilitado=true;     
                    this.horaFinalDesabilitado =true;
                    this.itemDesabilitado = true;                    
                    this.tpMaquinaDesabilitado=true;  

 


                }else if(oper=='Resetar'){

                    //this.tpMaquinaDesabilitado=false;
                    this.localFisicoDesabilitado=false;
                    //this.maquinaDesabilitado=false;
                    this.dataProducaoDesabilitado=false;
                    this.turnoDesabilitado=false;
                    this.ladoDesabilitado=false;  
                    this.horaInicioDesabilitado=false;      
                    this.horaFinalDesabilitado =false;  
                    this.itemDesabilitado = false;  

                    if(this.tipoMaquinaProps!="99"){
                        this.cdTipoMaquina = this.tipoMaquinaProps; 
                        this.tpMaquinaDesabilitado = true;

                    } else{

                        this.tpMaquinaDesabilitado=false;
                    }  

                    //this.localFisico = "";

                       
                }else{

                    //this.tpMaquinaDesabilitado=false;
                    this.localFisicoDesabilitado=false;
                    //this.maquinaDesabilitado=false;
                    this.dataProducaoDesabilitado=false;
                    this.turnoDesabilitado=false;
                    this.ladoDesabilitado=false;  
                    this.horaInicioDesabilitado=false;      
                    this.horaFinalDesabilitado =false;  
                    this.itemDesabilitado = false;  

                    if(this.tipoMaquinaProps!="99"){
                        this.cdTipoMaquina = this.tipoMaquinaProps; 
                        this.tpMaquinaDesabilitado = true;

                    } else{

                        this.tpMaquinaDesabilitado=false;
                    }  


                }
                //console.log(tpMaq);
 
            },
            async populaForm(){ 

                let horaP = '';
                let horaFormatada = ""; 
                let retornoPopForm=false;   
           
                horaP  = parseInt(this.producaoFiacao.horaInicio.substring(0,2) + this.producaoFiacao.horaInicio.substring(3,5))+"" 
                let dataP = this.producaoFiacao.dataProducao +""                
                dataP = this.producaoFiacao.dataProducao.substring(0,4) + this.producaoFiacao.dataProducao.substring(5,7) + this.producaoFiacao.dataProducao.substring(8,10) 
                //dataFormatada = this.resultado.dataProducao.split('/').reverse().join('-');        sa

                let url = `${process.env.VUE_APP_BASE_URL}/producao/filial/${this.$store.state.usuarioSistema.idfil}/maquina/${this.producaoFiacao.codigoMaquina}/dataProd/${dataP}/turno/${this.producaoFiacao.turno}/lado/${this.producaoFiacao.lado}/hora/${horaP}`;
                
                //console.log(url)  
                //console.log('populaForm 1111');
                await this.axios.get(url,this.apiTokenHeader())
                .then(response => {        

                    this.resultado = response.data;    


                    //console.log('this.resultado ZZZZZZZZZZZZZZZZ')
                    
                    //this.configuraCampos('I', this.producaoFiacao.codigoMaquina.substring(2,4)); 
  
                    this.producaoFiacao.idfil    = this.$store.state.usuarioSistema.idfil;
                    this.cdTipoMaquina           = this.producaoFiacao.codigoMaquina.substring(2,4);  
               
                    //console.log('this.resultado 3333331111111'  );
                    //console.log(this.cdTipoMaquina  );
                   //console.log(this.producaoFiacao.codigoMaquina.substring(2,4));
                   //console.log(this.resultado  );

                    if(this.resultado != ''){  
                        
                        this.producaoFiacao.codigoMaquina = this.resultado.codigoMaquina;

                        if (this.resultado.fkMaquina.nome != null){  
                            this.producaoFiacao.dsMaquina =  this.resultado.fkMaquina.nome;
                        }else{
                            this.producaoFiacao.dsMaquina = "" ;                       
                        } 

                    } 

                    if (this.resultado.horaFinal != null){ 
                        horaFormatada = ("0000" + this.resultado.horaFinal).slice(-4) ;        
                        this.producaoFiacao.horaFinal = horaFormatada.substring(0,2)   + ':' + horaFormatada.substring(2,4);    
                    }else{
                        this.producaoFiacao.horaFinal        = "" ;                       
                    } 
                    
                    if (this.resultado.item != null){
                        this.producaoFiacao.item = this.resultado.item;  
                    
                    }else{
                        this.producaoFiacao.item        = "" ;                       
                    }                     

                    if (this.resultado.qtdeProduzida != null){
                        this.producaoFiacao.qtdeProduzida= this.resultado.qtdeProduzida;  
                    
                    }else{
                        this.producaoFiacao.qtdeProduzida       = 0 ;                       
                    }  

                    if (this.resultado.eficiencia != null){
                        this.producaoFiacao.eficiencia = this.resultado.eficiencia;  
                    
                    }else{
                        this.producaoFiacao.eficiencia        = 0 ;                       
                    }  
                    
                    if (this.resultado.quilosHora != null){
                        this.producaoFiacao.kgHora = this.resultado.quilosHora;  
                    
                    }else{
                        this.producaoFiacao.kgHora        = 0 ;                       
                    }      

                    
                    if (this.resultado.codigoAbertura != null){
                        this.producaoFiacao.codigoAbertura = this.resultado.codigoAbertura;  
                    
                    }else{
                        this.producaoFiacao.codigoAbertura        = '' ;                       
                    }   

                    if (this.resultado.loteProducao != null){
                        this.producaoFiacao.loteProducao = this.resultado.loteProducao;  
                    
                    }else{
                        this.producaoFiacao.loteProducao        = '' ;                       
                    }  
                    
                    if (this.resultado.tituloCadastro != null){
                        this.producaoFiacao.tituloCadastro = this.resultado.tituloCadastro;  
                    
                    }else{
                        this.producaoFiacao.tituloCadastro        = 0 ;                       
                    }             
                

                    if (this.resultado.cdFornecPoliester != null){
                        this.producaoFiacao.cdFornecPoliester = this.resultado.cdFornecPoliester;  
                    
                    }else{
                        this.producaoFiacao.cdFornecPoliester        = '' ;                       
                    }  

                    if (this.resultado.cdFornecElastano != null){
                        this.producaoFiacao.cdFornecElastano = this.resultado.cdFornecElastano;  
                    
                    }else{
                        this.producaoFiacao.cdFornecElastano        = '' ;                       
                    }  
                    
                    if (this.resultado.lotePoliester != null){
                        this.producaoFiacao.lotePoliester = this.resultado.lotePoliester;  
                    
                    }else{
                        this.producaoFiacao.lotePoliester        = '' ;                       
                    }    
 
                    if (this.resultado.loteElastano != null){
                        this.producaoFiacao.loteElastano = this.resultado.loteElastano;  
                    
                    }else{
                        this.producaoFiacao.loteElastano        = '' ;                       
                    }  

                    if (this.resultado.cor != null){
                        this.producaoFiacao.cor = this.resultado.cor;  
                    
                    }else{
                        this.producaoFiacao.cor        = '' ;                       
                    }  
                    
                    if (this.resultado.rpm != null){
                        this.producaoFiacao.rpm = this.resultado.rpm;  
                    
                    }else{
                        this.producaoFiacao.rpm        = 0 ;                       
                    }  

                    if (this.resultado.numeroFusos != null){
                        this.producaoFiacao.numeroFusos = this.resultado.numeroFusos;  
                    
                    }else{
                        this.producaoFiacao.numeroFusos        = 0;                       
                    }  

                    if (this.resultado.numRupturas != null){
                        this.producaoFiacao.numRupturas = this.resultado.numRupturas;  
                    
                    }else{
                        this.producaoFiacao.numRupturas        = 0 ;                       
                    }   

                    if (this.resultado.metragem != null){
                        this.producaoFiacao.metragem = this.resultado.metragem;  
                    
                    }else{
                        this.producaoFiacao.metragem        = 0;                       
                    }  

                    if (this.resultado.idSSM != null){
                        this.producaoFiacao.idSSM = this.resultado.idSSM;  
                    
                    }else{
                        this.producaoFiacao.idSSM        = 9999999 ;                       
                    }   
  

                    if (this.resultado.numeroTrocas != null){
                        this.producaoFiacao.numeroTrocas = this.resultado.numeroTrocas;  
                    
                    }else{
                        this.producaoFiacao.numeroTrocas        = 0 ;                       
                    }      

                    if (this.resultado.ehTroca != null){
                        this.producaoFiacao.ehTroca = this.resultado.ehTroca;  
                    
                    }else{
                        this.producaoFiacao.ehTroca        = '';                       
                    }  

                    if (this.resultado.horaInicialTrocaFio != null){
                        this.producaoFiacao.horaInicialTrocaFio = this.resultado.horaInicialTrocaFio;  
                    
                    }else{
                        this.producaoFiacao.horaInicialTrocaFio        = 0;                       
                    }  
                    
                    if (this.resultado.horaFinalTrocaFio != null){
                        this.producaoFiacao.horaFinalTrocaFio = this.resultado.horaFinalTrocaFio;  
                    
                    }else{
                        this.producaoFiacao.horaFinalTrocaFio        = 0 ;                       
                    }      
                  
                    if (this.resultado.nomeFornElastano != null){
                        this.producaoFiacao.nomeFornElastano = this.resultado.nomeFornElastano;  
                    
                    }else{
                        this.producaoFiacao.nomeFornElastano        = '';                       
                    }  

                    if (this.resultado.nomeFornPoliester != null){
                        this.producaoFiacao.nomeFornPoliester = this.resultado.nomeFornPoliester;  
                    
                    }else{
                        this.producaoFiacao.nomeFornPoliester        = '';                       
                    }   

                    if (this.resultado.numeroSerie != null){
                        this.producaoFiacao.numeroSerie = this.resultado.numeroSerie;  
                    
                    }else{
                        this.producaoFiacao.numeroSerie        = '' ;                       
                    }   

                    if (this.resultado.ehReprocesso != null){
                        this.producaoFiacao.ehReprocesso = this.resultado.ehReprocesso;  
                    
                    }else{
                        this.producaoFiacao.ehReprocesso        = '';                       
                    }  
                    
                    if (this.resultado.obs != null){
                        this.producaoFiacao.obs = this.resultado.obs;  
                    
                    }else{
                        this.producaoFiacao.obs        = '' ;                       
                    }   
                    
                    if (this.resultado.alfaTorcao != null){
                        this.producaoFiacao.alfaTorcao = this.resultado.alfaTorcao;  
                    
                    }else{
                        this.producaoFiacao.alfaTorcao        = 0;                       
                    }   

                    if (this.resultado.tpm != null){
                        this.producaoFiacao.tpm = this.resultado.tpm;  
                    
                    }else{
                        this.producaoFiacao.tpm        = 0;                       
                    }  
                    
                    if (this.resultado.tituloNominal != null){
                        this.producaoFiacao.tituloNominal = this.resultado.tituloNominal;  
                    
                    }else{
                        this.producaoFiacao.tituloNominal        = 0 ;                       
                    }   

                    if (this.resultado.operador != null){
                        this.producaoFiacao.operador = this.resultado.operador;  
                    
                    }else{
                        this.producaoFiacao.operador        = '';                       
                    }  

                    if (this.resultado.rpmCAR != null){
                        this.producaoFiacao.rpmCAR = this.resultado.rpmCAR;  
                    
                    }else{
                        this.producaoFiacao.rpmCAR        = 0;                       
                    }  
                    
                    if (this.resultado.pton != null){
                        this.producaoFiacao.pton = this.resultado.pton;  
                    
                    }else{
                        this.producaoFiacao.pton        = 0 ;                       
                    }     

                    if (this.resultado.ptos != null){
                        this.producaoFiacao.ptos = this.resultado.ptos;  
                    
                    }else{
                        this.producaoFiacao.ptos        = 0;                       
                    }  

                    if (this.resultado.ptol != null){
                        this.producaoFiacao.ptol = this.resultado.ptol;  
                    
                    }else{
                        this.producaoFiacao.ptol        = 0;                       
                    }  
                    
                    if (this.resultado.ptof != null){
                        this.producaoFiacao.ptof = this.resultado.ptof;  
                    
                    }else{
                        this.producaoFiacao.ptof        = 0 ;                       
                    }
                    
                    if (this.resultado.mo != null){
                        this.producaoFiacao.mo = this.resultado.mo;  
                    
                    }else{
                        this.producaoFiacao.mo        = 0;                       
                    }  

                    if (this.resultado.cpvsl != null){
                        this.producaoFiacao.cpvsl = this.resultado.cpvsl;  
                    
                    }else{
                        this.producaoFiacao.cpvsl        = 0;                       
                    }  
                    
                    if (this.resultado.cmvsl != null){
                        this.producaoFiacao.cmvsl = this.resultado.cmvsl;  
                    
                    }else{
                        this.producaoFiacao.cmvsl        = 0 ;                       
                    }              
       
                    if (this.resultado.ccpc != null){
                        this.producaoFiacao.ccpc = this.resultado.ccpc;  
                    
                    }else{
                        this.producaoFiacao.ccpc        = 0;                       
                    }  

                    if (this.resultado.ccmc != null){
                        this.producaoFiacao.ccmc = this.resultado.ccmc;  
                    
                    }else{
                        this.producaoFiacao.ccmc        = 0;                       
                    }  
                    
                    if (this.resultado.jp != null){
                        this.producaoFiacao.jp = this.resultado.jp;  
                    
                    }else{
                        this.producaoFiacao.jp        = 0 ;                       
                    }                   
          
                    if (this.resultado.jm != null){
                        this.producaoFiacao.jm = this.resultado.jm;  
                    
                    }else{
                        this.producaoFiacao.jm        = 0;                       
                    }  

                    if (this.resultado.cvp != null){
                        this.producaoFiacao.cvp = this.resultado.cvp;  
                    
                    }else{
                        this.producaoFiacao.cvp        = 0;                       
                    }  
                    
                    if (this.resultado.cvm != null){
                        this.producaoFiacao.cvm = this.resultado.cvm;  
                    
                    }else{
                        this.producaoFiacao.cvm        = 0 ;                       
                    }    

                    if (this.resultado.prob1 != null){
                        this.producaoFiacao.prob1 = this.resultado.prob1;  
                    
                    }else{
                        this.producaoFiacao.prob1        = 0;                       
                    }  

                    if (this.resultado.prob2 != null){
                        this.producaoFiacao.prob2 = this.resultado.prob2;  
                    
                    }else{
                        this.producaoFiacao.prob2        = 0;                       
                    }  
                    
                    if (this.resultado.prob3 != null){
                        this.producaoFiacao.prob3 = this.resultado.prob3;  
                    
                    }else{
                        this.producaoFiacao.prob3        = 0 ;                       
                    }   


                    if (this.resultado.tensaoBobina != null){
                        this.producaoFiacao.tensaoBobina = this.resultado.tensaoBobina;  
                    
                    }else{
                        this.producaoFiacao.tensaoBobina        = 0;                       
                    }  

                    if (this.resultado.cnat != null){
                        this.producaoFiacao.cnat = this.resultado.cnat;  
                    
                    }else{
                        this.producaoFiacao.cnat        = 0;                       
                    }  
                    
                    if (this.resultado.prdtur != null){
                        this.producaoFiacao.prdtur = this.resultado.prdtur;  
                    
                    }else{
                        this.producaoFiacao.prdtur        = 0 ;                       
                    }

                    if (this.resultado.tituloReal!= null){
                        this.producaoFiacao.tituloReal= this.resultado.tituloReal;  
                    
                    }else{
                        this.producaoFiacao.tituloReal       = 0 ;                       
                    } 

                    if (this.resultado.estiragem!= null){
                        this.producaoFiacao.estiragem= this.resultado.estiragem;  
                    
                    }else{
                        this.producaoFiacao.estiragem       = 0 ;                       
                    }               
                    
                    if (this.resultado.qtdeFitas!= null){
                        this.producaoFiacao.qtdeFitas= this.resultado.qtdeFitas;  
                    
                    }else{
                        this.producaoFiacao.qtdeFitas       = 0 ;                       
                    }  
                    
                    if (this.resultado.d_percent!= null){
                        this.producaoFiacao.d_percent= this.resultado.d_percent;  
                    
                    }else{
                        this.producaoFiacao.d_percent       = 0 ;                       
                    }                      
                    
                    if (this.resultado.cv!= null){
                        this.producaoFiacao.cv= this.resultado.cv;  
                    
                    }else{
                        this.producaoFiacao.cv       = 0 ;                       
                    }  
                    
                    if (this.resultado.cvIn!= null){
                        this.producaoFiacao.cvIn= this.resultado.cvIn;  
                    
                    }else{
                        this.producaoFiacao.cvIn       = 0 ;                       
                    }                      
        
                    if (this.resultado.pg!= null){
                        this.producaoFiacao.pg= this.resultado.pg;  
                    
                    }else{
                        this.producaoFiacao.pg       = 0 ;                       
                    }                
          
                    if (this.resultado.a_percent!= null){
                        this.producaoFiacao.a_percent= this.resultado.a_percent;  
                    
                    }else{
                        this.producaoFiacao.a_percent       = 0 ;                       
                    }   

                    if (this.resultado.t25!= null){
                        this.producaoFiacao.t25= this.resultado.t25;  
                    
                    }else{
                        this.producaoFiacao.t25       = 0 ;                       
                    } 

                    if (this.resultado.t20!= null){
                        this.producaoFiacao.t20= this.resultado.t20;  
                    
                    }else{
                        this.producaoFiacao.t20       = 0 ;                       
                    } 

                    if (this.resultado.t15!= null){
                        this.producaoFiacao.t15= this.resultado.t15;  
                    
                    }else{
                        this.producaoFiacao.t15       = 0 ;                       
                    }        
                    
                    
                    if (this.resultado.t125!= null){
                        this.producaoFiacao.t125= this.resultado.t125;  
                    
                    }else{
                        this.producaoFiacao.t125       = 0 ;                       
                    } 

                    if (this.resultado.t120!= null){
                        this.producaoFiacao.t120= this.resultado.t120;  
                    
                    }else{
                        this.producaoFiacao.t120       = 0 ;                       
                    } 

                    if (this.resultado.t115!= null){
                        this.producaoFiacao.t115= this.resultado.t115;  
                    
                    }else{
                        this.producaoFiacao.t115       = 0 ;                       
                    }                      
       
                    if (this.resultado.t225!= null){
                        this.producaoFiacao.t225= this.resultado.t225;  
                    
                    }else{
                        this.producaoFiacao.t225       = 0 ;                       
                    } 

                    if (this.resultado.t220!= null){
                        this.producaoFiacao.t220= this.resultado.t220;  
                    
                    }else{
                        this.producaoFiacao.t220       = 0 ;                       
                    } 

                    if (this.resultado.t215!= null){
                        this.producaoFiacao.t215= this.resultado.t215;  
                    
                    }else{
                        this.producaoFiacao.t215       = 0 ;                       
                    }                      
        

                    if(this.tipoOperacao == 'I' &&  this.resultado!='' ){  
                        this.tipoOperacao = 'A';  
                    }  



                    //console.log('this.resultado XXXXXXXXXXX')
                    //console.log(this.resultado) 

                    if(this.resultado==''){ 

                        this.mensagemErro = ''; 
                        this.haErros = false ;
                        if (this.tipoOperacao == 'I') { 

                            /// const result = await  this.validaDatas()  ;
                            if(this.validaDatas()  )  {//   
                                this.buscaMaquinaPorLocal();    
                            }  
 
                        }
              
                    }else{
               
                        //console.log( "XXXzzz");
                        
                        //if(this.resultado.codigoMaquina.substring(2,4)=='02'){


                        //}
                        this.apiPesquisaParam('item', this.producaoFiacao.item, this.producaoFiacao);
                        this.buscaFichaTecnica();       
                        this.apiPesquisaParam('operador', this.producaoFiacao.operador, this.producaoFiacao);
                        this.calcEfic(this.resultado.codigoMaquina.substring(2,4));
                        this.configuraCampos('A' )  ;

                    } 

                    retornoPopForm = true;
                                       

               } )   
                    .catch(error => {  
                         
                         console.log("Erro: ", error);
                         //this.mensagemErro = error; 
                         //this.haErros = true ;
                         this.apiDisplayMensagem(error.response.data);  
                         retornoPopForm = false;
                 }  
                 );  

                 //Final PopulaForm  const resposta = await  this.apiDadosCalcEfic(this.producaoFiacao.item,hrIni,hrfim);  

                 return retornoPopForm;

            },

            navegarParaLogin(){this.$router.push({name:'login'  })}   ,

            configuraModeloTela(){

                this.nmTpMaq = ""
                if(this.tipoMaquinaProps=='02'){
                    this.nmTpMaq = "Produção Fiação - Cardas"
                    //if(this.$store.state.tipoDispositivo=='tablet' || this.$store.state.tipoDispositivo=='mobile'  ){                     
                        this.linhaQualidade03=this.$store.state.configuracaoTela.marginBottomTela ;                    
                        this.nmTpMaq = "Produção Cardas"
                      
                   // }                
                }else if(this.tipoMaquinaProps=='04'){
                    this.nmTpMaq = "Produção Fiação - Open Ends"
                   // if(this.$store.state.tipoDispositivo=='tablet' || this.$store.state.tipoDispositivo=='mobile'  ){
                        this.linhaQualidade01=this.$store.state.configuracaoTela.marginBottomTela ; 
                         this.nmTpMaq = "Produção Open Ends";
                                    
                   // }                
                }else if(this.tipoMaquinaProps=='06'){
                    this.nmTpMaq = "Produção Fiação - Conicaleiras"
                   // if(this.$store.state.tipoDispositivo=='tablet' || this.$store.state.tipoDispositivo=='mobile'  ){
                        this.linhaQualidade01=this.$store.state.configuracaoTela.marginBottomTela ; 
                        this.nmTpMaq = "Produção Conicaleiras";
                      
                   // }
                }else if(this.tipoMaquinaProps=='03'){
                    this.nmTpMaq = "Produção Fiação - Passadores"
                   // if(this.$store.state.tipoDispositivo=='tablet' || this.$store.state.tipoDispositivo=='mobile'  ){
                        this.linhaQualidade02=this.$store.state.configuracaoTela.marginBottomTela ;
                        this.nmTpMaq = "Produção Passadores";
                                          
                    //}
                }else if(this.tipoMaquinaProps=='05'){
                    this.nmTpMaq = "Produção Fiação - Maçaroqueiras"
                   // if(this.$store.state.tipoDispositivo=='tablet' || this.$store.state.tipoDispositivo=='mobile'  ){
                        this.linhaQualidade04=this.$store.state.configuracaoTela.marginBottomTela ; 
                        this.nmTpMaq = "Produção Maçaroqueiras";
                   
                    //}                
                }


            }


        } , 

        async created(){      
            
            


            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            } 

           let horaFormatada = "";  
           let dataFormatada = ""; 
    
           this.populaTipoMaquina();
           this.cdTipoMaquina = ''; 
           this.tipoMaquinaItem = '';

           if(this.operacao=='A'){
                this.tipoOperacao = 'A' 
            }else if(this.operacao=='I'){
                this.tipoOperacao = 'I'  
            }else if(this.operacao=='E'){
                this.tipoOperacao = 'E'  
            } 

            if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){  
              
               
                this.producaoFiacao.codigoMaquina = this.maquinaProps;

                this.producaoFiacao.dataProducao = this.dataProducaoProps;
                dataFormatada = this.producaoFiacao.dataProducao.split('/').reverse().join('-');
                this.producaoFiacao.dataProducao = dataFormatada ;                
                
                this.producaoFiacao.turno = this.turnoProps;
                this.producaoFiacao.lado  = this.ladoProps;


                //console.log('hora inicial')
                //console.log(this.horaInicialProps);



                this.producaoFiacao.horaInicio= this.horaInicialProps;  
                horaFormatada = ("0000" + this.producaoFiacao.horaInicio).slice(-4) ;  
                this.producaoFiacao.horaInicio = horaFormatada.substring(0,2)   + ':' + horaFormatada.substring(2,4);  

                //console.log('hora inicial 33333')
                //console.log(this.producaoFiacao.horaInicio);



                this.producaoFiacao.localFisico= this.localFisicoProps; 
                this.localFisico= this.localFisicoProps;  
                 
                this.cdTipoMaquina = this.producaoFiacao.codigoMaquina.substring(2,4);  

                //console.log('created')
                //console.log(this.cdTipoMaquina);

                if(this.validaChave()){
                   
                    const resposta = await this.populaForm();      

                    if (!(resposta === true) ){
                        console.log('Erro Create' );   
                    }



                }   
            }  else{

                if(this.operacao=='I'){
                     
                    if(this.tipoMaquinaProps!="99"){
                        this.cdTipoMaquina = this.tipoMaquinaProps; 
                        this.tpMaquinaDesabilitado = true;

                    }  

                }

            }
            //console.log('Created');
            //console.log(this.$store.state.tipoDispositivo);
            //console.log(this.$store.state.configuracaoTela.marginBottomTela);  
 


       },
        mounted(){
 

            //console.log('Mounted');
            //console.log(this.$store.state.tipoDispositivo);
            //console.log(this.$store.state.configuracaoTela.marginBottomTela);

            if(this.tipoMaquinaProps!="99"){
                this.cdTipoMaquina = this.tipoMaquinaProps; 
                this.tpMaquinaDesabilitado = true;
                this.configuraExibicao() ;
            }



            this.configuraModeloTela();



        },
        
        watch: {
       
            localFisico(newValue,oldValue) {

                if(newValue!=oldValue){

                    this.producaoFiacao.codigoMaquina =  "";   
                    this.producaoFiacao.dsMaquina =  "";   

                    if(this.localFisico!=null && this.localFisico!="" &&
                    this.cdTipoMaquina !=null && this.cdTipoMaquina !="00"   && this.cdTipoMaquina !=""){

                        if(this.localFisico.length==3)  {
                            this.apiTipoMaquina(this.cdTipoMaquina);
                            this.buscaMaquinaPorLocal();
                            this.producaoFiacao.localFisico = this.localFisico;
                            //console.log('Teste Watch');
                            //console.log(this.producaoFiacao.localFisico );
                    
                        } 
                        if(this.validaChave()){                                
                           this.buscaByChave();
                        }


                    }   

                }


            },
            cdTipoMaquina(newValue,oldValue)  {                
                
                if(newValue!=oldValue){

                        this.producaoFiacao.codigoMaquina =  "";   
                        this.producaoFiacao.dsMaquina =  "";   

                        if(this.localFisico!=null && this.localFisico!="" &&
                          this.cdTipoMaquina !=null && this.cdTipoMaquina !="00"  && this.cdTipoMaquina !=""){
                        
                            this.tpMaquina.cdClasse = '';
                            //console.log('this.tpoMaquina.cdClasse 333333');
                        
                            this.apiTipoMaquina(this.cdTipoMaquina);

                            //console.log('this.tpoMaquina.cdClasse');
                            //console.log(this.tpMaquina.cdClasse);

                            if(this.localFisico.length==3)  {  
                                this.buscaMaquinaPorLocal();      
                                ///console.log('Teste Watch 2222');  
                            } 
                            
                            if(this.validaChave()){                                
                                 this.buscaByChave();
                            }  

                          
                           // if(this.tipoOperacao=='A'){ 
                               // this.calcEficiencia();
                           // }



                        }
                    }
                 
             },
        },
            
 


   }

   </script>

 <style scoped> 



  @media screen and (max-width: 560px){
        .tornarResponsivo{
            width: 200px;

        }
 
    
  }

   
  .divCentral {
            background-color: #E0E0E0;
            height: 98%;
            width: 95%; 
        }  

</style>