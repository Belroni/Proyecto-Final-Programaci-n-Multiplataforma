import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Sidebar from '../components/Sidebar'
import Summary from '../components/Summary'
import ProductModal from '../components/ProductModal'
import useOrder from '../hooks/useOrder'
import { useAuth } from '../hooks/useAuth';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')

export default function Layout() {

  const {user, error} = useAuth({middleware: 'auth'})
  const { modal } = useOrder();

  console.log(user);
  console.log(error);

  return (
    <>
      <div className='md:flex '>
        <Sidebar/>
        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
          <Outlet />
        </main>

        <Summary/>
      </div>

      
      <Modal isOpen={modal} style={customStyles}>
        <ProductModal />
      </Modal>

      <ToastContainer />
    
    </>

    
  )
}
