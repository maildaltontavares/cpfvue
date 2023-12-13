<script>

export default {
   
 

       name: 'AcessoProducaoComponent'  ,

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

       mounted(){ 

        console.log('Acesso Producao')


        this.$router.push({name:'producaofiacao', params : {maquinaProps :this.maquinaProps ,dataProducaoProps : this.dataProducaoProps ,turnoProps : this.turnoProps , ladoProps : this.ladoProps , horaInicialProps :this.horaInicialProps ,localFisicoProps :this.localFisicoProps, operacao : this.operacao, tipoMaquinaProps : this.tipoMaquinaProps} } )

       }
    }       
 
</script>