import React, {useState} from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';

const MessageSent = styled.p`
    color: red;
    font-weight: bolder;
`

const EmailForm = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [messageSending, setMessageSending] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const [messageStatusSuccess, setMessageStatusSuccess] = useState(false)
    
    const handleSubmit = (e) => {

        e.preventDefault()

        setMessageSending(true)

        const emailJSParams = {
            name,
            email,
            message
        }

        emailjs.send('default_service', 'template_q0h3n16', emailJSParams, import.meta.env.VITE_EMAILJS_USER_ID)
            .then((result) => {
                setMessageStatusSuccess(true)
                setMessageSent(true)
                setMessageSending(false)

            }, (error) => {
                setMessageStatusSuccess(false)
                setMessageSent(true)
                setMessageSending(false)

        })

        setName("")
        setEmail("")
        setMessage("")

    }

    let messageSentMessage = null

    if(messageSent){
        messageSentMessage = messageStatusSuccess ? 
            `Message Sent.  Thank you!` :
            `There was an error.  Sorry...`
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}

        >
            <Stack spacing={2}>

                <h4>Send me a message:</h4>

                <MessageSent>{messageSentMessage}</MessageSent>
            
                <TextField
                    id="name"
                    label="Name"
                    variant="filled"
                    sx={{
                        background: `rgba(255, 255, 255, 0.8)`
                    }}
                    value={name}
                    disabled={messageSending}
                    onChange={(e) => setName(e.target.value)}
                    />

                <TextField
                    id="email"
                    label="Email"
                    variant="filled"
                    type="email"
                    sx={{
                        background: `rgba(255, 255, 255, 0.8)`,                        
                    }}
                    value={email}
                    disabled={messageSending}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    id="message"
                    label="Message"
                    variant="filled"
                    multiline
                    rows={4}
                    sx={{
                        background: `rgba(255, 255, 255, 0.8)`
                    }}
                    value={message}
                    disabled={messageSending}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <LoadingButton
                    type="submit"
                    endIcon={<SendIcon />}
                    loadingPosition="end"
                    loading={messageSending}
                    disabled={messageSending}
                    sx={{
                        borderRadius: `15rem`,
                        border: `none`,
                        backgroundColor: `var(--calltoactionbtn-bgcolor)`,
                        color: `var(--calltoactionbtn-color)`,
                        transition: `all 300ms ease`,
                        ':hover':{                            
                            backgroundColor: `var(--calltoactionbtn-color)`,
                            color: `#ffe6ff`,
                            boxShadow: `0rem 0rem 1rem 0rem #aaaaaa`,
                            textShadow: `0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
                                -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
                                0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483`

                        }
                    }}
                >Send</LoadingButton>

            </Stack>
        </Box>
    )
}

export default EmailForm
