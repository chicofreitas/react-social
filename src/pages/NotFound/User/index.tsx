
export default function User(){
    return (
        <>
        <div className='bg-gray-800'>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">
                    
                    <div className="flex">
                        <div className="flex"></div>

                        <div className="flex">
                            <a href="">Home</a>
                            <a href="">Add</a>
                            <a href="">Notifications</a>
                            <a href="">Direct Messages</a>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex">
                            My Profile
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container mx-auto px-4 columns-2 flex flex-row mt-8 mb-8'>
            
            <div className='basis-3/4 rounded border-2 border-black mr-4 ml-0'>
                <h1>User Not Found</h1>
                <h2>404</h2>
            </div>

            <div className='basis-1/4 rounded border-2 border-black mr-0 ml-4'>
                <h1>Sidebar</h1>
                <h2>Sugestões de usuários</h2>
            </div>
        </div>

        <div className="container mx-auto bg-gray-300">
            <div className="flex flex-row">
                <div className="basis-1/4">1st</div>
                <div className="basis-1/4">2nd</div>
                <div className="basis-1/4">3rd</div>
                <div className="basis-1/4">4th</div>
            </div>
        </div>
        </>
    )
}