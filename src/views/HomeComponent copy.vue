<template>

 
<div class="row cabecalho_principal">
    <div class="col-4 cabecalho_principal_sistema">
        <router-link class="navbar-brand" to="home">CPF </router-link>
    </div>
    <div class="col-4 cabecalho_principal_empresa">
        <label class="empresa">{{ this.$cookies.get('usuarioSistema').empresa }}</label>
    </div>
    <div class="col-2">
    <label class="cabecalho_principal_usuario">Usuário: </label>
    <label class="cabecalho_principal_usuario_nome"> {{ this.$cookies.get('usuarioSistema').nome }}</label>
    </div>
    <div class="col-2 d-flex justify-content-end">
    <router-link to="/" class="btn btn-sm btn-primary mt-2 mb-2">
        <i class="bi bi-door-open" style="cursor: pointer;"></i>
    </router-link>
    </div>
</div>

<nav class="navbar navbar-expand-lg bg-body-tertiary"  > 

    <div class="container-fluid" >
    
    
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Cadastros
        </a>
        <ul class="dropdown-menu">
        
            <li><a class="dropdown-item"  accesskey="t" @click="navegarParaTipoMaquinas">Tipo de Máquinas</a></li>
            <li><a class="dropdown-item"   @click="navegarParaMaquinas">Máquinas</a></li>
            <li><a class="dropdown-item"  @click="navegarParaModelo">Modelo Tela</a></li> 
            <li><a class="dropdown-item"   @click="navegarParaTesteCSS">Teste CSS</a></li>
            <li><hr class="dropdown-divider"></li> 
            <li><a class="dropdown-item"  @click="sair">Sair</a></li> 

        </ul> 
    
    </div>
</nav>  

<!--
<div class="flex-container ">   
    <div class="divCentral">    
        xxxxxxxxxxxxxxx
    </div>   
</div>
--> 
  <div class="row corpoPrincipal">
    <router-view></router-view>
  </div>  
  
 
</template>

<script>

   export default {
       name: 'HomeComponent'  ,
       methods:  {  
        sair: function sairxxxxx() { 
            this.$router.push('/')  
        },
        ///navegarParaTipoMaquinas(){this.$router.push( { name: 'tipomaquinapesquisa'} ) }    

        navegarParaTipoMaquinas(){this.$router.push({name:'tipomaquina' , params : { codigo: ' ' , operacao : 'I'}} ) },
        navegarParaMaquinas(){this.$router.push({name:'maquina' , params : { codigo: ' ' , operacao : 'I'}} ) },
        navegarParaTesteCSS(){this.$router.push({name:'testecss' } ) },
        navegarParaModelo(){this.$router.push({name:'modelo' } ) }

        },

        navegarParaLogin(){this.$router.push({name:'login'  })}, 
        async created(){   

            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            }   
        } 
   }

</script>
   
<style>


.principal{

height: 50px;
width: 80%;
background-color:rgb(235, 232, 234);    
margin-left: 10%; 


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
    width: 80%; 
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
    width: 90%;   
}

@media screen and (max-width: 560px){
 
 .pai21{


     
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

.filho51{  
background-color: aquamarine;
width:450px;

} 

.filho1{
 
background-color: aqua;
width: 100px;

}

.botaoPesquisa{ 
background-color: beige;

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
 

</style>