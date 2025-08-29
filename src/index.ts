import colors from 'colors'
import server from './server'

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(colors.bgBlack.magenta.italic('Servidor Funcionando en el puerto: '), port)
})
