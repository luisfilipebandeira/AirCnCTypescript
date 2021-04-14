import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {FiUpload} from 'react-icons/fi'
import './styles.css'

interface Props {
  onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> = ({onFileUploaded}) => {
  const [thumbnail, setThumbnail] = useState('')

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]

    const fileUrl = URL.createObjectURL(file)

    setThumbnail(fileUrl)

    onFileUploaded(file)
  }, [onFileUploaded])
  const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/*'})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input  {...getInputProps()} accept="image/*" />
      {thumbnail ? <img src={thumbnail} alt="Imagem Estabelicimento" /> 
      : <p>
          <FiUpload />
          Arraste ou clique para fazer o upload de uma foto
        </p>}
    </div>
  )
}

export default Dropzone