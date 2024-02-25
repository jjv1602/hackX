import { Button, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import st from './pst.module.css';
import { FiUploadCloud } from "react-icons/fi";
import { Box } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,Input } from '@chakra-ui/react'
// import UploadForm from '../../reports/patient_reports_page/UploadedPdfsSection/UploadForm'
import { useNavigate } from "react-router-dom";
const Past = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const uploaddocs=()=>{
        
        navigate('/reports');
    }
    return (
        <div className={st.pstpar}>
            <button onClick={uploaddocs}>
                <div className={st.box}>
                    <FiUploadCloud size={"10vh"} color={"#6799FF"}></FiUploadCloud>
                    <div className={st.imgheading}>Upload a document</div>
                    <div className={st.supported}>Supported Formats PDF.  <br></br>
                        Size should be less than 5 mb.
                    </div>
                </div>
            </button>
        </div>
    )
}

export default Past
