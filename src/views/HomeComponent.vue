<template>

    <div class="row cabecalho_principal">
        <div class="col-4 cabecalho_principal_sistema">
            <router-link class="navbar-brand" to="/cpf/home">CPF </router-link>
        </div>
        <div class="col-3 cabecalho_principal_empresa d-flex justify-content-center">
            <label class="empresa">{{ this.$store.state.usuarioSistema.empresa }}</label>
        </div>
        <div class="col-4 d-flex justify-content-end">
        <label class="cabecalho_principal_usuario">Usuário: {{ this.$store.state.usuarioSistema.nome }}</label>
        <!--<label class="cabecalho_principal_usuario_nome" > {{ this.$store.state.usuarioSistema.nome }}</label>-->
        </div>
        <div class="col-1 d-flex justify-content-end">
        <router-link to="/cpf"  class="btn btn-sm btn-primary mt-2 mb-2">
            <span  title="Sair"><i class="bi bi-door-open" style="cursor: pointer;"></i></span>
        </router-link>
        </div>
    </div>
    
 
<!--
    <nav class="navbar navbar-expand-lg bg-body-tertiary  "  > 
    <ul class="navbar-nav "     >
      <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle" style="color:black"  href="#"  data-bs-toggle="dropdown" aria-expanded="false">
            Cadastros
            </a>
             <ul class="dropdown-menu"    >   
                <li><a class="dropdown-item"  accesskey="t" @click="navegarParaTipoMaquinas" >Tipos de Máquinas</a></li>
                <li><a class="dropdown-item"   @click="navegarParaMaquinas" bold>Máquinas</a></li>
             -->
                <!-- 
                <li><a class="dropdown-item"  @click="navegarParaModelo">Modelo Tela</a></li> 
                <li><a class="dropdown-item"   @click="navegarParaTesteCSS">Teste CSS</a></li>
                            

                <li><hr class="dropdown-divider"></li>   
                <li><a class="dropdown-item"  @click="sair" bold><b>Sair</b></a></li>  

            </ul>
      </li>
      <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" style="color:black"  href="#"  data-bs-toggle="dropdown" aria-expanded="false">
            Movimentos
            </a>
             <ul class="dropdown-menu">   
                
                <li><a class="dropdown-item"    @click="navegarParaProducaoFiacaoCardas">Produção Cardas</a></li>
                <li><a class="dropdown-item"    @click="navegarParaProducaoFiacaoPassador">Produção Passadores</a></li>
                <li><a class="dropdown-item"    @click="navegarParaProducaoFiacaoMacaroqueira">Produção Macaroqueiras</a></li>
                <li><a class="dropdown-item"    @click="navegarParaProducaoFiacaoOE">Produção Open Ends</a></li>
                <li><a class="dropdown-item"    @click="navegarParaProducaoFiacaoConicaleira">Produção Conicaleiras</a></li>
                 <li><a class="dropdown-item"    accesskey="t" @click="navegarParaProducaoFiacao">Produção</a></li> 
                    
            </ul>

            
                
      </li>


      <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" style="color:black"  href="#"  data-bs-toggle="dropdown" aria-expanded="false">
            Configurações
            </a>
             <ul class="dropdown-menu"      >   
                <li><a class="dropdown-item"    @click="navegarParaUsuarios">Usuários</a></li>                
                <li><a class="dropdown-item"    @click="navegarParaUsuariosLogin">Credenciais</a></li>
                <li><a class="dropdown-item"    @click="navegarParaTrocarSenha">Trocar senha</a></li>
                
            </ul>
      </li>      

      <li class="nav-item dropdown">
            <a class="nav-link  " style="color:black"  href="#"    aria-expanded="false">
            Sobre
            </a>
 
      </li>      

 
      
    </ul> 



  </nav> 

-->

  <nav class="py-2 bg-light  ">
    <div class=" d-flex flex-wrap  ">
      <ul class="nav me-auto">   

<!--
            <ul class="navbar-nav" v-if="this.exibeClose">
                <li class="nav-item dropdown" style="margin-left:10px;margin-right:5px">   
                    <button type="button" style="border:none" @click="alternaBotao() "> <img src="@/assets/icon_deletar.gif" height ="20" width="20" /></button>
                </li>
            </ul>
-->

                <ul class="navbar-nav"     >
                    <li class="nav-item dropdown" style="margin-left:20px;margin-right:10px">
                            <a class="nav-link dropdown-toggle" style="color:black"  href="#"  data-bs-toggle="dropdown" aria-expanded="false">
                            Cadastros
                            </a>
                            <ul class="dropdown-menu"    >   
                                <li><a class="dropdown-item"  accesskey="t" @click="navegarParaTipoMaquinas" >Tipos de Máquinas</a></li>
                                <li><a class="dropdown-item"   @click="navegarParaMaquinas" bold>Máquinas</a></li>
                                <li><a class="dropdown-item"   @click="navegarParaLoteFiacao" bold>Lote de fiação</a></li>
                                

                                <!-- 
                                <li><a class="dropdown-item"  @click="navegarParaModelo">Modelo Tela</a></li> 
                                <li><a class="dropdown-item"   @click="navegarParaTesteCSS">Teste CSS</a></li>
                                -->                

                                <li><hr class="dropdown-divider"></li>   
                                <li><a class="dropdown-item"  @click="sair" bold><b>Sair</b></a></li>  

                            </ul>
                    </li>
                </ul>
             
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" style="color:black"  href="#"  data-bs-toggle="dropdown" aria-expanded="false">
                    Movimentos
                    </a>
                    <ul class="dropdown-menu">   
                        
                        <li><a class="dropdown-item"    @click="navegarParaProducaoFiacaoCardas">Produção Cardas</a></li>
                        <li><a class="dropdown-item"    @click="navegarParaProducaoFiacaoPassador">Produção Passadores</a></li>
                        <li><a class="dropdown-item"    @click="navegarParaProducaoFiacaoMacaroqueira">Produção Macaroqueiras</a></li>
                        <li><a class="dropdown-item"    @click="navegarParaProducaoFiacaoOE">Produção Open Ends</a></li>
                        <li><a class="dropdown-item"    @click="navegarParaProducaoFiacaoConicaleira">Produção Conicaleiras</a></li> 
                        <!--<li><a class="dropdown-item"    accesskey="t" @click="navegarParaProducaoFiacao">Produção</a></li>-->
                            
                    </ul> 
                </li>        
     

                <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" style="color:black"  href="#"  data-bs-toggle="dropdown" aria-expanded="false">
                        Configurações
                        </a>
                        <ul class="dropdown-menu"      >   
                            <li><a class="dropdown-item"    @click="navegarParaUsuarios">Usuários</a></li>                
                            <li><a class="dropdown-item"    @click="navegarParaUsuariosLogin">Credenciais</a></li>
                            <li><a class="dropdown-item"    @click="navegarParaTrocarSenha">Trocar senha</a></li>
                            
                        </ul>
                </li>      
 <!--
                <li class="nav-item dropdown">
                        <a class="nav-link  " style="color:black"  href="#"    aria-expanded="false">
                        Sobre
                        </a>
            
                </li>                  
-->

 


      </ul>

 
    </div>
  </nav>




  
      <div class="row corpoPrincipal">
        <router-view></router-view>
      </div>  
       

 
        <!--<router-view></router-view>-->
 
     
    </template>
    
    <script>

   
       
       export default {
           name: 'HomeComponent'  , 
        
           methods:  {  
            sair: function sair() { 
                this.$router.push({name:'login' } )  
            },
            ///navegarParaTipoMaquinas(){this.$router.push( { name: 'tipomaquinapesquisa'} ) }    
    
            navegarParaTipoMaquinas(){this.$router.push({name:'tipomaquina' , params : { codigo: ' ' , operacao : 'I'}} ) },
            navegarParaMaquinas(){this.$router.push({name:'maquina' , params : { codigo: ' ' , operacao : 'I'}} ) },
            navegarParaTesteCSS(){this.$router.push({name:'testecss' } ) },
            navegarParaModelo(){this.$router.push({name:'modelo' } ) },
            navegarParaProducaoFiacao(){this.$router.push({name:'acessoproducao', params : {maquinaProps :' ' ,dataProducaoProps : ' ' ,turnoProps : ' ' , ladoProps : ' ' , horaInicialProps :' ' ,localFisicoProps :' ', operacao : 'I', tipoMaquinaProps : '99'} } ) },
            navegarParaProducaoFiacaoOE(){this.$router.push({name:'acessoOE', params : {maquinaProps :' ' ,dataProducaoProps : ' ' ,turnoProps : ' ' , ladoProps : ' ' , horaInicialProps :' ' ,localFisicoProps :' ', operacao : 'I', tipoMaquinaProps : '04'} } ) },
            navegarParaProducaoFiacaoCardas(){this.$router.push({name:'acessocardas', params : {maquinaProps :' ' ,dataProducaoProps : ' ' ,turnoProps : ' ' , ladoProps : ' ' , horaInicialProps :' ' ,localFisicoProps :' ', operacao : 'I', tipoMaquinaProps : '02'} } ) },
            navegarParaProducaoFiacaoConicaleira(){this.$router.push({name:'acessoconicaleira', params : {maquinaProps :' ' ,dataProducaoProps : ' ' ,turnoProps : ' ' , ladoProps : ' ' , horaInicialProps :' ' ,localFisicoProps :' ', operacao : 'I', tipoMaquinaProps : '06'} } ) },
            navegarParaProducaoFiacaoPassador(){this.$router.push({name:'acessoconicaleira', params : {maquinaProps :' ' ,dataProducaoProps : ' ' ,turnoProps : ' ' , ladoProps : ' ' , horaInicialProps :' ' ,localFisicoProps :' ', operacao : 'I', tipoMaquinaProps : '03'} } ) },
            navegarParaProducaoFiacaoMacaroqueira(){this.$router.push({name:'acessomacaroqueira', params : {maquinaProps :' ' ,dataProducaoProps : ' ' ,turnoProps : ' ' , ladoProps : ' ' , horaInicialProps :' ' ,localFisicoProps :' ', operacao : 'I', tipoMaquinaProps : '05'} } ) },
            navegarParaUsuarios(){this.$router.push({name:'usuario'   , params : { codigoProps :' ' , operacao : 'I' }}) },
            navegarParaUsuariosLogin(){this.$router.push({name:'usuarioLogin' , params : {sistemaProps : '2' ,usuarioProps : '0' , operacao : 'I' }} ) },
            navegarParaTrocarSenha(){this.$router.push({name:'trocarsenha' , params : {sistemaProps : '2' ,usuarioProps :this.$store.state.usuarioSistema.id  }} ) },
                       
            navegarParaLoteFiacao(){this.$router.push({name:'lotefiacao', params : {tipoMaquinaProps : '00' ,loteprops:' ',  itemprops :' ', operacao:'I'  }})},
            navegarParaLogin(){this.$router.push({name:'login'  })}   
            } , 

            created(){   

                if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                      this.navegarParaLogin();
                }             
              
            } 
       }
    
    </script>
       
    <style>
    /*
    
    .principal{
    
    height: 50px;
    width: 80%;
    background-color:rgb(235, 232, 234);    
    margin-left: 10%; 
 
    
    
    }
    */

    .principal{
    
    height: 50px;
    width: 90%;
    background-color:rgb(235, 232, 234);    
 
    margin-left: 5%; 
    
    
    }


    .flex-container{
        display: flex; 
        flex-direction: row; 
        justify-content: center; 
        width: 100%;
        
    }
    
    .flex-linha{
      
        /*   Comentar */
        /* 
        background-color:cornflowerblue ;     
        border: solid 5px ;
        border-color: blue;
        */
        width:95%; 
        display: flex;
        flex-wrap: wrap;
        margin-bottom:5px ;
        align-items: center;
        
    } 
    
    .padraoCodigo {
        width: 100px;
        margin-right: 15px; 
        margin-bottom:5px ;   
        
        /*   Comentar */
        /*
        border: solid 5px ;
        border-color: blue;
        */
         
    }
    
    .padraoCombo{
        height: 35px;
        margin-bottom:5px ;   
    
    }
    
    
    .padraoDesc {
        width: 350px;
        margin-right: 15px; 
        margin-bottom:5px ;   
        
        /*   Comentar */
        /*
        border: solid 5px ;
        border-color: red;
        */ 
    }
    
    .divCentral {
        background-color: #E0E0E0;
        height: 600px;
        width: 90%; 
        margin-bottom:10%;
    }
    
    .divForm{
        margin-top:20Px;
        margin-left:20Px;
        max-width: 98%;
        
    }
    
    .verde{
          background-color:cadetblue; 
    }
    
    
    .azul{
          background-color:blue;  
    }
    
    .amarelo{
          background-color:yellow;
            
    
    }
    .vermelho{
        background-color: red;
    }
    
    .cinzaClaro{
        background-color: aliceblue;
    }
    .divBlock{
    
        height:100px;
        
    }
    
    .ocupaTodoComponente{
        width: 100%;
    }
    
    .campoPesquisaMinWidth{
    
        min-width: 200Px;
    
    }
    
    
    /* .CSS DALTON */
    
    
    
    .linha{ 
        border: solid 3px; 
        border-color:black; 
        width: 95%;   
    }

    .div-box {
         
        background-color:darkgray;
        color: white;
        text-align: center;        
        font-size:14px;
        width: 90%;   
        font-weight: bold;
        margin-top: 10px;
        
     } 
/*
    .exibeDesktop{
        display: inline-flex;
    }

    .exibeMobile{
        display: none;
    } 
 
  */  
    @media screen and (max-width: 560px){
     

        .externoCampoConjugado{     
            align-content: center;
            /*  Comentar */
            /*
            border: solid 5px; 
            border-color:brown;  
            */
            
            display: flex;
            flex-wrap: wrap;
            margin-right: 5px;     
            margin-bottom: 5px; 
            max-width: 300px;
            
            }

        .pai21{
        
            background-color: aqua;
            
            /*  Comentar */
            /*
            background-color:cornflowerblue ;
            align-content: center;     
            border: solid 5px; 
            border-color:green;  
            */
        
            display: flex;
            flex-wrap: wrap;
            margin-right: 5px;     
            margin-bottom: 5px; 
            max-width: 300px;
            
            
        }
        
        
        .padraoDesc{
                max-width: 250px;
            /*  Comentar */
            /*
                border: solid 5px; 
                border-color:green; 
                */  
        }
        
        .divCentral {
            background-color: #E0E0E0;
            height: 900px;
            width: 95%; 
        }     
        
    
    }
    
    .espacoEntreComponentes{
            margin-right: 20px;  
    }
    
    
    .padraoCodigo1 {
    width: 300px; 
    margin-bottom:5px ; 
    margin-right: 15px; 
    /*  Comentar */
    /*   
    border: solid 5px ;
    border-color: blue;
    */
    }
    
    
    
    .pai22{
    
    width: 350px;
    margin-right: 15px; 
    margin-bottom:5px ;
    
    } 
    

    .externoCampoConjugado{     
    align-content: center;
    /*  Comentar */
    /*
    border: solid 5px; 
    border-color:brown;  
    */
    
    display: flex;
    flex-wrap: wrap;
    margin-right: 5px;     
    margin-bottom: 5px; 
    
    }



    .pai{    
    background-color:cornflowerblue ;
    align-content: center;
    border: solid 5px;
    width:95%; 
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5px;
    }
    
    .pai21{
    background-color:cornflowerblue ;
    align-content: center;
    /*  Comentar */
    /*
    border: solid 5px; 
    border-color:brown;  
    */
    
    display: flex;
    flex-wrap: wrap;
    margin-right: 5px;     
    margin-bottom: 5px; 
    
    }
    
    .frontCampoConjugado{ 
 
     width: 100px;
     flex-grow: 0;
     } 

    .filho21{
     
    background-color: aqua;
    width: 100px;
    flex-grow: 0;
    } 
    
    .filho41{
     
     background-color: aqua;
     width: 100px;
     flex-grow: 0;
    } 
    
    .filho31{  
    background-color: aquamarine;
    width: 350px; 
    flex-grow: 1;
    } 


    .backCampoConjugado{  
 
    width: 350px; 
    flex-grow: 1;
    } 
    
    .filho51{  
    background-color: aquamarine;
    width:450px;
    
    } 
    
    .filho1{
     
    background-color: aqua;
    width: 100px;
    
    }
    
     
    
    .filho3{  
    background-color: aquamarine;
    width: 600px; 
    }
    
    .limitadorMedia{
    text-align: center;
    width: 100%;
     
    
    }
    
    .texto21{
    text-align: center;
    width: 100%;
    
    }
     


    /* Estilos personalizados */
    .dropdown-menu > .dropdown-submenu {
      position: static;
    }
    
    .dropdown-submenu .dropdown-menu {
      top: 0;
      left: 100%;
      margin-top: -6px;
      margin-left: -1px;
      width: 250px;
    }
   /*
    .dropdown-item {
      background-color: black;
      color: #640df0;
    }
 */
 




    

    </style>