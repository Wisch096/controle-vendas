interface MessageProps {
    tipo: string;
    field?: string;
    texto: string;
}

export const Message: React.FC<MessageProps> = ({
    texto,
    field,
    tipo
}) => {
    return (
        <article className={`message is-${tipo}`}>
            <div className="message-body">
                {`${field} :`}{texto}
            </div>
        </article>
    )
}


