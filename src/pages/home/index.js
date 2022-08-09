import React from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import Widget from '../../components/widget'
import Charts from '../../components/charts'
import "./home.scss"
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai"
import { MdAttachMoney, MdAccountBalanceWallet } from "react-icons/md"
import Featured from '../../components/featured'
import { useProjects } from '../../hooks/useProjects'
import Table from '../../components/table'
import { useSolicitud } from '../../hooks/useSolicitud'
import { useActividad } from '../../hooks/useActividades'
import { Helmet } from 'react-helmet'
// import { useNotification } from '../../hooks/useNotification'
// import { getAllUsers } from '../../services/getUser'
// import { Link } from "react-router-dom"

export default function Home() {

    const { dataProjects } = useProjects()
    const { allSolicitudes } = useSolicitud()
    const { dataActividades } = useActividad()
    // const navigate = useNavigate()
    
    // const [userState, setUserState] = useLocalStorage("user", user)

    // useEffect(() => {
    //     console.log("user en home", userState)
    //     if(userState) {
    //         navigate("/", {replace: true})
    //     } else {
    //         navigate("/login", {replace: true})
    //         dispatch({
    //             type: "LOGOUT",
    //             user: null
    //         })

    //     }
    // }, [userState, navigate, dispatch])

    // states to sockets
    // emit -> Send event to server
    // on -> Take evento from server
    // const [socket, setSocket] = useState(null)
    // const [username, setUsername] = useState("")
    // const [user, setUser] = useState("")


    // states fetch api
    // const [dataProfesor, setDataProfesor] = useState([])
    // const get = getAllUsers()

    // useEffect(() => {

    //     getAllUsers().then((data) => {
    //         setDataProfesor(data.data)
    //     })

    // }, [])

    // console.log(dataProfesor[0].email)

    // SOCKETSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    // const { socket } = useNotification()
    // console.log(socket)
    
    // useEffect(() => {
    //     const socket = io("http://localhost:8000");
    //     console.log(socket)
    //     setSocket(io("http://localhost:8000"))
    // }, [])

    // useEffect(() => {
    //     socket.emit("newUser")
    // }, [socket, user])

    // const [userState, setUserState] = useLocalStorage("user", user)

    // const userPersis = () => {
    //     setUserState(userState)
    // }

    // console.log("userState", userState)

    // useEffect(() => {
    //     socket?.emit("newUser", user)
    // }, [socket, user])

    // let amountProjects = dataProjects.length
    // console.log(amountProjects)
    // console.log(allSolicitudes.length)
    // console.log(dataActividades.length)
    // let amountSolicitudes = dataSolicitud.length
    // let amountActividades = dataSolicitud.length


    const data = [
        {
            title: "Usuarios",
            amount: 4,
            link: "Ver todos los usuarios",
            icon: <AiOutlineUser />,
            redirect: "/"
        },
        {
            title: "Proyectos",
            amount: dataProjects.length,
            link: "Ver todas las ordenes",
            icon: <AiOutlineShopping />,
            redirect: "/proyectos"
        },
        {
            title: "Solicitudes",
            amount: allSolicitudes.length,
            link: "Ver todas las solicitudes",
            icon: <MdAttachMoney />,
            redirect: "/totalSolicitudes"
        },
        {
            title: "Actividades",
            amount: dataActividades.length,
            link: "Ver todas las actividades",
            icon: <MdAccountBalanceWallet />,
            redirect: "/"
        }
    ]

    return (
        <section className='home'>

            <Helmet>
                <meta charSet='utf-8'></meta>
                <title>Softel || Dashboard</title>
            </Helmet>

            <Sidebar />
            <div className='home__container'>
                <Navbar />
                <div className="home__widgets">
                    {data.map((type, index) => (
                        <Widget 
                            key={index}
                            title={type.title}
                            amount={type.amount}
                            link={type.link}
                            icon={type.icon}
                            redirect={type.redirect}
                        />
                    ))}
                </div>
                <div className="home__charts">
                    <Featured />
                    <Charts />
                </div>
                <Table />
                {/* <div className='list__container'>
                    <h3 className='list__title'>
                        Latest Transactions
                    </h3>
                    
                </div> */}
            </div>
        </section>
    )
}
