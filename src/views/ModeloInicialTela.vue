<template>
    
    <form  @submit.stop.prevent="submitForm" @reset.prevent="resetarForm($event)">  

        <div>  
            <div class="principal cinzaClaro">
                <p class="card-header text-center" style="font-size: 30px; margin-bottom: 80px; margin-top: 2%;color: blue; font-weight: bold;">Produção Fiação</p>
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
                                      :disabled="tpMaquinahabilitado"   
                                      @blur="configuraCampos" 
                                       v-model="this.cdTipoMaquina" 

                                     >
                                    <option value="" disabled>Selecione o tipo de maquina</option>
                                    <option v-for="t in this.tipoMaquina" :key="t.codigo" :value="t.codigo"> {{ t.nome }}</option>       
                                         
                                </select> 
                            </div> 
                        </div>        
                         
                    </div>         
                    

                    <!-- Linha 002 -->

                    <div class="flex-linha"> 


                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                            
                            <label for="localFisico" class="col-form-label label_cabecalho">Local Fisico</label> 
                                        
                            <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                            
                                <input type="text"
                                    id="localFisico"
                                    class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                    style="margin:0px;"
                                    maxlength="3"                                        
                                    ref="local" 
                                    v-maska data-maska="###" 
                                    
                                > 

                            </Popper>   

                        </div>   


                        <div class="row espacoEntreComponentes"  >  
                            <div class=" text-start">
                                <label for="maquina" class="col-form-label  label_cabecalho">Máquina </label>
                                <div class="input-group"> 

                                    <div class="pai21" > 
                                        <div class="filho21"> 
                                                <input type="text" class="texto21 form-control form-control-sm text-center">   
                                        </div>

                                        <div class="botaoPesquisa">  
                                                <button type="button" class="btn btn-sm btn-primary bi-search input-group-append"></button> 
                                            </div>           

                                            <div class="filho31">   
                                                <input type="text" class="limitadorMedia form-control form-control-sm text-center" > 
                                            </div>   
                                    </div>  

                                </div>
                            </div> 
                         </div>  


                        <div class="row espacoEntreComponentes   "  style="width:230px;"   > 
                            
                            <label for="dataProducao" class="col-form-label label_cabecalho">Data Produção</label> 
                                        
                            <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  > 
                            
                                <input type="Date"
                                    id="dataProducao"
                                    class="form-control form-control-sm   text-center "
                                    style="margin:0px;width:180px"                                                                     
                                    ref="dataProducao" 
                                   
                                    
                                > 

                            </Popper>   

                        </div>   

                        
                        <div class="row espacoEntreComponentes"   style="width:230px;"  > 
                                
                                <label for="turno"   class="col-form-label label_cabecalho">Turno</label> 
                                            
                                <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;"  > 

                                    <select   class="form-select padraoCombo form-control form-control-sm " >
                                        <option value="" disabled>Selecione o turno</option> 
                                        <option > A </option>    
                                        <option > B </option>   
                                        <option > C </option>  

                                    </select>         
                            
                                </Popper>   
                            
                        </div>    

                        <div class="row espacoEntreComponentes"   style="width:230px;"  > 
                                
                                <label for="lado"   class="col-form-label label_cabecalho">Lado</label> 
                                            
                                <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;"  > 

                                    <select   class="form-select padraoCombo form-control form-control-sm " >
                                        <option value="" disabled>Selecione o lado</option> 
                                        <option > A </option>    
                                        <option > B </option>    

                                    </select>         
                            
                                </Popper>   
                            
                        </div>     


                    </div>   


                    <!-- FIM Linha 002 -->


                    <!-- Linha 003 -->
                    <div class="flex-linha"> 


                                <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="hrInicial" class="col-form-label label_cabecalho">Hora Inicial</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="hrInicial"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="3"                                        
                                            ref="hrInicial" 
                                            v-maska data-maska="###" 
                                            
                                        > 

                                    </Popper>   

                                </div>   



                                <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="hrFinal" class="col-form-label label_cabecalho">Hora Final</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="hrFinal"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="3"                                        
                                            ref="hrFinal" 
                                            v-maska data-maska="###" 
                                            
                                        > 

                                    </Popper>   

                                </div>   


                                <div class="row espacoEntreComponentes"  >  
                                        <div class=" text-start">
                                            <label for="item" class="col-form-label  label_cabecalho">Item </label>
                                            <div class="input-group"> 

                                                <div class="pai21" > 
                                                    <div class="filho21"> 
                                                            <input type="text" class="texto21 form-control form-control-sm text-center">   
                                                    </div>

                                                    <div class="botaoPesquisa">  
                                                            <button type="button" class="btn btn-sm btn-primary bi-search input-group-append"></button> 
                                                        </div>           

                                                        <div class="filho31">   
                                                            <input type="text" class="limitadorMedia form-control form-control-sm text-center" > 
                                                        </div>   
                                                </div>  

                                            </div>
                                        </div> 
                                </div>  

                       

                         
                    </div> 



                    <!-- FIM Linha 003 -->


              
                    <div class="flex-linha">                    
                         <div class="linha"></div>
                    </div> 
                    
                    
                      <!--  LINHA 0004 -->    
                  
                      <div class="flex-linha">


                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="hrInicial" class="col-form-label label_cabecalho">Qtde. Produz.</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="qtde"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="qtde" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>   



                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="eficMaq" class="col-form-label label_cabecalho">Efic. Máquina</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="eficMaq"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="eficMaq" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>  




                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="rpm" class="col-form-label label_cabecalho">RPM</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="rpm"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="rpm" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>          
                        
                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="alfa" class="col-form-label label_cabecalho">Alfa</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="alfa"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="alfa" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>           
                        
                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="numFusos" class="col-form-label label_cabecalho">Num. Fusos</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="numFusos"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="numFusos" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>                            


                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="eficReal" class="col-form-label label_cabecalho">Efic. Real</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="eficReal"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="eficReal" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>  




                        <div class="row espacoEntreComponentes"  >  
                                        <div class=" text-start">
                                            <label for="item" class="col-form-label  label_cabecalho">Operador </label>
                                            <div class="input-group"> 

                                                <div class="pai21" > 
                                                    <div class="filho21"> 
                                                            <input type="text" class="texto21 form-control form-control-sm text-center">   
                                                    </div>

                                                    <div class="botaoPesquisa">  
                                                            <button type="button" class="btn btn-sm btn-primary bi-search input-group-append"></button> 
                                                        </div>           

                                                        <div class="filho31">   
                                                            <input type="text" class="limitadorMedia form-control form-control-sm text-center" > 
                                                        </div>   
                                                </div>  

                                            </div>
                                        </div> 
                        </div>                          



                     </div>
                     <!--  FIM LINHA 0004 -->    



                     <!-- LINHA 005 -->

                     <div class="flex-linha">
                        

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="lote" class="col-form-label label_cabecalho">Lote</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="lote"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="lote" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div> 


                        <div class="row espacoEntreComponentes " style="width:380px;"  > 
                            
                            <label for="nomeMaquina" class="col-form-label label_cabecalho">Observação</label> 
                            <Popper arrow hover class="dark  " style="margin-bottom:12px;  height:37px;"  >
                              
                            
                                <input type="text"
                                    id="nomeMaquina"
                                    class="form-control form-control-sm text-uppercase padraoDesc "
                                    style="margin:0px;"
                                    maxlength="100"                                        
                                    ref="nomeMaquina" 
                                 
                                > 

                            </Popper>   

                        </div>                          


                        
                    </div>


                    <!-- FIM LINHA 005 -->


                    <div class="flex-linha">                    
                         <div class="linha"></div>
                    </div>  

                    <!-- RUPTURAS  LINHA 006-->                   

                    <div class="flex-linha">

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="tensaoBob" class="col-form-label label_cabecalho">Tensão bobina</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="tensaoBob"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="tensaoBob" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div> 



                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="rpmCard" class="col-form-label label_cabecalho">RPM Cardinha</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="rpmCard"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="rpmCard" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>      
                        
                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="N" class="col-form-label label_cabecalho">N</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="N"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="N" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>              
                        
                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="S" class="col-form-label label_cabecalho">S</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="S"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="S" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>           
                        
                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="L" class="col-form-label label_cabecalho">L</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="L"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="L" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>             
                        
                        
                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="MO" class="col-form-label label_cabecalho">MO</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="MO"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="MO" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>                            

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="CPVSL" class="col-form-label label_cabecalho">CP V+ SL+</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="CPVSL"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="CPVSL" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>   

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="CMVSL" class="col-form-label label_cabecalho">CM V- SL-</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="CMVSL"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="CMVSL" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div> 


                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="CCPC" class="col-form-label label_cabecalho">CCp C+</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="CCPC"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="CCPC" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div> 

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="CCMC" class="col-form-label label_cabecalho">CCm C-</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="CCMC"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="CCMC" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div> 



                    </div>

                    <!-- Linha 007 -->

                    <div class="flex-linha">    

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="JPP" class="col-form-label label_cabecalho">Jp (P+)</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="JPP"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="JPP" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div> 

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="JMP" class="col-form-label label_cabecalho">Jm (P-)</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="JMP"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="JMP" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>                         

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="CVP" class="col-form-label label_cabecalho">CVP</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="CVP"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="CVP" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>    
                        
                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="CVM" class="col-form-label label_cabecalho">CVM</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="CVM"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="CVM" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>      
                        
                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="CVM" class="col-form-label label_cabecalho">Rup. Nat</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="CVM"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="CVM" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>       
                        
                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="robo01" class="col-form-label label_cabecalho">% Robô 01</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="robo01"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="robo01" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>       
                        
                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="robo02" class="col-form-label label_cabecalho">% Robô 02</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="robo02"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="robo02" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>                    

                        <div class="row espacoEntreComponentes  "  style="width:130px;"   > 
                                    
                                    <label for="robo03" class="col-form-label label_cabecalho">% Robô 03</label> 
                                                
                                    <Popper arrow hover class="dark  "  style="margin-bottom:12px;  height:37px;"  >  
                                    
                                        <input type="text"
                                            id="robo03"
                                            class="form-control form-control-sm text-uppercase padraoCodigo text-center "
                                            style="margin:0px;"
                                            maxlength="10"                                        
                                            ref="robo03" 
                                            v-maska data-maska="##########" 
                                            
                                        > 

                                    </Popper>   

                        </div>  
                        
                    </div>

                    <!--FIM  Linha 007 -->

                    
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
  // import { required, helpers , requiredIf} from '@vuelidate/validators'   
   //import SimNao from '@/requires/SimNao.vue'
    import Popper from 'vue3-popper'

    export default {

        name: 'ModeloInicialTela',
        mixins: [ApiMixin], 
        components: {    Popper },
        data: () => ({
            
            resultado : "", 
            tipoMaquina : [],
            cdTipoMaquina:'',
            tpMaquinahabilitado:false,
            tipoMaquinaTemp: {    
                 codigo:'' ,
                 nome:  '' , 
            },
            producaoFiacao:{
                maquina:'' ,    
                dataProducao:'' ,   
                turno:'',  
                hr_inicio:0,   
                lado:'',	  
                hr_fim:0,   
                item:'',    
                qtdewProduz:0,    
                eficMaquina :0,	
                kgHora:0,	
                codigoAbertura,	
                lote:'',	 
                titulo:0, 		
                fornecPoliester:'',
                fornecElastano:'',
                lotePoliester:'',
                loteElastano:'',
                cor:'',		
                velocidade:0,	
                numeroFusos:0,	
                numeroRupturas,	
                metragemSSM:0,	
                idSSM:0,		
                numeroTrocasFios:0,	
                houveTroca:'',	
                horaInicialTroca:0,	
                horaFinalTroca:0,	
                nomeFornecElastano:'',	
                nomeFornecPoliester:'',	
                numeroSerie:'',	
                localFisico:'',	
                reprocessoSSM:'',	
                obs:"",		
                alfa:0,	
                tpm:0,					
                tit:0,		
                operador:'',	
                rpmCardina:0,	
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
                percentRobo01:0,	
                percentRobo02:0,
                percentRobo03:0,
                tensaoBobina:0,	
                cnat:0,        
                prdtur:0,      
                tituloFichaTecnica:0      
            }

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
            }
        } ,

        created(){  
 
           this.populaTipoMaquina();
           this.cdTipoMaquina = '';

           if(this.operacao=='A'){
                this.tipoOperacao = 'A' 
            }else if(this.operacao=='I'){
                this.tipoOperacao = 'I'  
            }else if(this.operacao=='E'){
                this.tipoOperacao = 'E'  
            } 

            if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){                   
                this.maquina.codigo = this.codigo ; 
                this.populaForm();   
                
            }  

       }


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