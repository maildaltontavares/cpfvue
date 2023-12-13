import {createRouter, createWebHistory} from "vue-router";
import LoginComponent from '@/views/LoginComponent.vue';
import HomeComponent from '@/views/HomeComponent.vue';
import TipoMaquina from '@/views/TipoMaquinaComponent';
import Maquina from '@/views/MaquinaComponent';
import TesteCSS from  '@/views/TesteCSS';
import TipoMaquinaPesquisa from '@/views/TipoMaquinaPesquisaComponent';
import MaquinaPesquisa from '@/views/MaquinaPesquisaComponent';
import Modelo from '@/views/ModeloComponent';
import ProducaoFiacao from '@/views/ProducaoFiacaoComponent';   
import ProducaoFiacaoPesquisa from '@/views/ProducaoFiacaoPesquisaComponent'; 

import AcessoCardas from '@/views/AcessoCardasComponent.vue';
import AcessoOE from '@/views/AcessoOpenEndComponent.vue';
import AcessoConicaleira from '@/views/AcessoConicaleirasComponent.vue'
import AcessoProducao from '@/views/AcessoProducaoComponent.vue'
import UsuarioLoginComponent from '@/views/UsuarioLoginComponent.vue'
import UsuarioLoginPesquisa  from '@/views/UsuarioLoginPesquisaComponent.vue'
import TrocarSenha from '@/views/TrocarSenhaComponent.vue'
import Usuario from '@/views/UsuarioComponent.vue'
import UsuarioPesquisa from '@/views/UsuarioPesquisaComponent.vue'
import AcessoMacaroqueira from '@/views/AcessoMacaroqueiraComponent.vue'
import AcessoPassador from '@/views/AcessoPassadorComponent.vue'
import LoteFiacao from '@/views/LoteFiacaoComponent.vue'
import LoteFiacaoPesquisa from '@/views/LoteFiacaoPesquisaComponent.vue'

import store from '@/store/index'
import axios from 'axios'
 
 


const routes =  
    [
        {
            path: '/cpf',
            component: LoginComponent  ,
        // meta fields são usados nas guardas de rotas
            meta: { requerAutorizacao: false, codigoPagina: 'pagLogin' }    ,        
            name:'login' 
        } 
        , 
        {
            path: '/cpf/home',
            component: HomeComponent,
            name: 'home' ,
            children: [
                 
                {
                    path: 'tipomaquina/:codigo/:operacao',
                    props: true,
                    component: TipoMaquina,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagTipoMaquina' }    ,                            
                    name: 'tipomaquina' 
                    
                } ,                

                {
                  path: 'tipomaquinalista',
                  component: TipoMaquinaPesquisa,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagTipoMaquinaPesquisa' }    ,     
                  name: 'tipomaquinapesquisa' 
                    
                } ,        

                {
                  path: 'maquina/:codigo/:operacao',
                  props: true,
                  component: Maquina,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagMaquina' }    ,                       
                  name: 'maquina' 
                    
                } ,     

                {
                  path: 'producaofiacao/:maquinaProps/:dataProducaoProps/:turnoProps/:ladoProps/:horaInicialProps/:localFisicoProps/:operacao/:tipoMaquinaProps',
                  props: true,
                  component: ProducaoFiacao,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagProducaoFiacao' }    ,     
                  name: 'producaofiacao' 
                    
                },   
                
                {
                  path: 'acessoproducao/:maquinaProps/:dataProducaoProps/:turnoProps/:ladoProps/:horaInicialProps/:localFisicoProps/:operacao/:tipoMaquinaProps',
                  props: true,
                  component: AcessoProducao,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagAcessoProducao' }    , 
                  name: 'acessoproducao' 
                    
                },  


                {
                  path: 'acessocardas/:maquinaProps/:dataProducaoProps/:turnoProps/:ladoProps/:horaInicialProps/:localFisicoProps/:operacao/:tipoMaquinaProps',
                  props: true,
                  component: AcessoCardas,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagAcessoCardas' }    , 
                  name: 'acessocardas' 
                    
                },  
                {
                  path: 'acessoOE/:maquinaProps/:dataProducaoProps/:turnoProps/:ladoProps/:horaInicialProps/:localFisicoProps/:operacao/:tipoMaquinaProps',
                  props: true,
                  component: AcessoOE,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagAcessoOE' }    , 
                  name: 'acessoOE' 
                    
                },                   
                
                {
                  path: 'acessoconicaleira/:maquinaProps/:dataProducaoProps/:turnoProps/:ladoProps/:horaInicialProps/:localFisicoProps/:operacao/:tipoMaquinaProps',
                  props: true,
                  component: AcessoConicaleira,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagAcessoConicaleira' }    , 
                  name: 'acessoconicaleira' 
                    
                },               
                
                {
                  path: 'acessomacaroqueira/:maquinaProps/:dataProducaoProps/:turnoProps/:ladoProps/:horaInicialProps/:localFisicoProps/:operacao/:tipoMaquinaProps',
                  props: true,
                  component: AcessoMacaroqueira,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagAcessoMacaroqueira' }    , 
                  name: 'acessomacaroqueira' 
                    
                },                     
                
                {
                  path: 'acessopassador/:maquinaProps/:dataProducaoProps/:turnoProps/:ladoProps/:horaInicialProps/:localFisicoProps/:operacao/:tipoMaquinaProps',
                  props: true,
                  component: AcessoPassador,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagAcessoPassador' }    , 
                  name: 'acessopassador' 
                    
                },   

                {
                  path: 'producaofiacao/:maquinaProps/:dataProducaoProps/:turnoProps/:ladoProps/:horaInicialProps/:localFisicoProps/:operacao/:tipoMaquinaProps',
                  props: true,
                  component: ProducaoFiacao,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagProducaoFiacaoPassador' }    , 
                  name: 'producaofiacaopassador' 
                    
                },                 

                {
                  path: 'producaofiacao/:maquinaProps/:dataProducaoProps/:turnoProps/:ladoProps/:horaInicialProps/:localFisicoProps/:operacao/:tipoMaquinaProps',
                  props: true,
                  component: ProducaoFiacao,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagProducaoFiacaoMacaroqueira' }    , 
                  name: 'producaofiacaomacaroqueira' 
                    
                }, 
              
                {
                  path: 'producaofiacao/:maquinaProps/:dataProducaoProps/:turnoProps/:ladoProps/:horaInicialProps/:localFisicoProps/:operacao/:tipoMaquinaProps',
                  props: true,
                  component: ProducaoFiacao,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagProducaoFiacaoCardas' }    , 
                  name: 'producaofiacaocardas' 
                    
                },   

                {
                  path: 'producaofiacao/:maquinaProps/:dataProducaoProps/:turnoProps/:ladoProps/:horaInicialProps/:localFisicoProps/:operacao/:tipoMaquinaProps',
                  props: true,
                  component: ProducaoFiacao,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagProducaoFiacaoOE' }    , 
                  name: 'producaofiacaoOE' 
                    
                },                  

                {
                  path: 'producaofiacao/:maquinaProps/:dataProducaoProps/:turnoProps/:ladoProps/:horaInicialProps/:localFisicoProps/:operacao/:tipoMaquinaProps',
                  props: true,
                  component: ProducaoFiacao,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagProducaoFiacaoConicaleira' }    , 
                  name: 'producaofiacaoconicaleira' 
                    
                },   

                {
                  path: 'producaofiacaopesquisa/:tipoMaquinaProps',
                  props: true,
                  component: ProducaoFiacaoPesquisa,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagProducaoFiacaoPesquisa' }    , 
                  name: 'producaofiacaopesquisa' 
                    
                },  

                {
                  path: 'usuario/:codigoProps/:operacao',            
                  props: true,      
                  component: Usuario,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagUsuario' }    , 
                  name: 'usuario' 
                    
                },                 
                {
                  path: 'usuariopesquisa',            
                  props: true,      
                  component: UsuarioPesquisa,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagUsuarioPesquisa' }    , 
                  name: 'usuariopesquisa' 
                    
                },     
                
                {
                  path: 'usuariologinpesquisa/:sistemaProps',
                  props: true,
                  component: UsuarioLoginPesquisa,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagUsuarioLoginPesquisa' }    , 
                  name: 'usuariologinpesquisa' 
                    
                },   
                 

                {
                  path: 'usuariologin/:sistemaProps/:usuarioProps/:operacao',
                  props: true,
                  component: UsuarioLoginComponent,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagUsuarioLogin' }    , 
                  name: 'usuarioLogin' 
                    
                } 
                
                ,      
                
                {
                  path: 'trocarsenha/:sistemaProps/:usuarioProps',
                  props: true,
                  component: TrocarSenha,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagTrocarSenha' }    , 
                  name: 'trocarsenha' 
                    
                } 
                
                ,    
                
                {
                  path: 'lotefiacao/:tipoMaquinaProps/:loteprops/:itemprops/:operacao',                  
                  props: true,
                  component: LoteFiacao,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagLoteFiacao' }    , 
                  name: 'lotefiacao' 
                    
                }  
                ,   

                {
                  path: 'lotefiacaopesquisa',                                    
                  component: LoteFiacaoPesquisa,
                  //meta: { requerAutorizacao: true, codigoPagina: 'pagLoteFiacao' }    , 
                  name: 'lotefiacaopesquisa' 
                    
                }  
                ,   

                {
                  path: 'maquinapesquisa',
                  component: MaquinaPesquisa,
                  meta: { requerAutorizacao: true, codigoPagina: 'pagMaquinaPesquisa' }    , 
                  name: 'maquinapesquisa' 
                    
                } 
                
                ,        

                {
                  path: 'testecss',
                  component: TesteCSS,
                  name: 'testecss' 
                    
                }          
                ,        

                {
                  path: 'modelo',
                  component: Modelo,
                  name: 'modelo' 
                    
                }                          


            ]            
        }
 
    ]

const router = createRouter({
    history: createWebHistory(),
    base: process.env.VUE_APP_BASE_URL,
    routes
    })    




router.beforeEach(async (to ) => {
      // verificar se o usuario possui permissao de acesso à rota
      // to -> Para onde vai
      // from -> de onde vem
  

      //console.log('rotas')
      if (to.name != 'login' && store.state.usuarioSistema.codigo == '') {  
          return { name: 'login' }
      }
  
      if (to.name != 'login' && process.env.VUE_APP_SEGURANCA == 'S') {
       
          if (store.state.permissoesUsuario.length == 0 && store.state.usuarioSistema.codigo != '') {
              let url = `${process.env.VUE_APP_BASE_URL}/usuarioseg/permissao/${process.env.VUE_APP_SISTEMA}/${store.state.usuarioSistema.codigo}`;
              
              //console.log(url)
              //console.log(process.env.VUE_APP_TOKEN)   
              //console.log(store.state._token)  

              if(process.env.VUE_APP_TOKEN==false){

              
                    await axios.get(url, 

                     )
                        .then(response => {
                            store.state.permissoesUsuario = response.data
                      
                            //console.log(response.data)
                            //console.log(this.$store.state.permissoesUsuario);
                        })
                        .catch(error => {
                
                            console.log("Erro: ", error.response);
                            return { name: 'login' }
                        }
                        );

              }else{

                        //console.log('com token')
                        await axios.get(url , 
                          { headers: { 'Authorization': store.state._token} }
                          )
                        .then(response => {
                            store.state.permissoesUsuario = response.data
                      
                            //console.log(response.data)
                            //console.log(this.$store.state.permissoesUsuario);
                        })
                        .catch(error => {
                
                            console.log("Erro: ", error.response);
                            return { name: 'login' }
                        }
                        );


              }
          }
  
          if (to.name != 'login' && store.state.permissoesUsuario.length == 0) {
              alert("Usuário sem permissões ao sistema !")
              return false
          }
  
          if (to.meta.requerAutorizacao) {
  
              store.state.permissaoUsuario = store.state.permissoesUsuario.find(item => item.PAGINA_SIGLA.trim() === to.meta.codigoPagina.trim())
  
              if (to.name != 'login' && store.state.permissaoUsuario == undefined) {
                  alert("Usuário sem permissões na página: " + to.meta.codigoPagina.trim() + " !")
                  return false
              }
  
              //console.log('Permissao: ', store.state.permissaoUsuario, store.state.permissaoUsuario.ACESSO)
  
              if (to.name != 'login'
                  && store.state.permissoesUsuario.length > 0
                  && store.state.usuarioSistema.codigo != ''
                  && store.state.permissaoUsuario.ACESSO != 'S') {
                  alert("Acesso Não Autorizado!")
                  return false
              }
          }
  
      }
})
  

export default router