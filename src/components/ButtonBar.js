
export default function ButtonBar({text, menu=false}) {
    return (
        <div className='button-bar' style={{width: menu ? '100vw' : 120}}>
            <div className='text-button-bar'>
                <div className='text-container-button-bar'>
                    {text}
                </div>
            </div>
        </div>
    );
}
