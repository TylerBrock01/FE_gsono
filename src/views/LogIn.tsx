import ButtonStyle from "../ButtonStyle.tsx";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
export default function LogIn() {
    const xd= 'w-80'
    return(
        <>
            <div className=' flex justify-center p-3'>
                <div className='bg-gray-100/80 p-2 md:p-9 rounded-md'>
                    <div>
                        <img alt='xd' className={xd} src="https://apps9.itson.edu.mx/CIA/img/ITSON-MARCA.png"/>
                        <img alt='xd' className={xd} src="https://apps9.itson.edu.mx/CIA/img/CIA.png"/>
                    </div>
                    <div className='flex flex-col gap-3 justify-center p-10'>
                        <label className='grid'>
                            <input className=' focus:outline-blue-400 bg-white rounded-md px-2 text-slate-700/70' type="text" placeholder="Ingresar ID ITSON"/>
                        </label>
                        <label className='grid'>
                            <input className=' focus:outline-blue-400 bg-white rounded-md px-2 text-slate-700/70' type="password" placeholder="Ingresar clave"/>
                        </label>
                        <label className='grid'>
                            <Button>Button</Button>
                        </label>
                        <label className='flex justify-center'>
                            <AlertDialog>
                                <AlertDialogTrigger>Aviso de privacidad</AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Aviso de privacidad</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cerrar</AlertDialogCancel>
                                        {/*<AlertDialogAction>Continue</AlertDialogAction>*/}
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </label>
                    </div>

                </div>

            </div>
        </>
    )
}