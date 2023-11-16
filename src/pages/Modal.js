function Modal({onClose}) {
    return (
        <>
            <div className='fixed w-full h-full bg-black/50 left-0 top-0 z-50' onClick={() => {onClose}}>
                <div className="bg-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2">
                    <ul>
                    </ul>
                    <button className="absolute top-5 right-5 text-xl" onClick={() => {onClose}}>❌</button>
                </div>
            </div>
        </>
    )
}