import React from 'react'
import { Grid, Typography } from '@mui/material'
import './Sobre.css'

function Sobre() {

    return (
        <>
            <Grid id='sobre' container>
                <Typography color='primary' variant='h1' className='sobre-nos'>Sobre nós</Typography>
                <Grid className='texto-sobre' item container xs={12}>
                    <Typography color='secondary' variant='h6'>Somos uma e-commerce sustentável na qual usuários podem comprar e vender produtos novos,
                         usados e recicláveis. Este projeto foi idealizado a partir do 12º Objetivo de Desenvolvimento Sustentável da ONU,
                          que aborda o consumo e a produção responsáveis. Escolhemos o lagarto Gecko como representante deste tema devido
                           ao fato do réptil conseguir sobreviver em locais inóspitos, apesar de estar ameaçado de extinção. Com isso,
                            esperamos realizar um trabalho de conscientização e incentivar práticas comerciais que contribuem para um
                             crescimento ecológico, a fim de preservar o nosso Planeta Terra.</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Sobre
