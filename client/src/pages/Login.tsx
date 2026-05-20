import AuthForm from "../components/layout/AuthForm";
import { Check, FileText } from "lucide-react"

function Login() {
    const benefits = [
        'Capture your thoughts instantly',
        'Organize with colors and pins',
        'Access from anywhere',
        'Auto-saved with cloud sync',
    ];
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 flex items-center justify-center p-4 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-stone-700/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-stone-700/10 rounded-full blur-3xl" />
                </div>

                <div className="w-full max-w-5xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left side - Features */}
                        <div className="hidden md:block text-white">
                            <div className="flex items-center gap-3 mb-8 ">
                                <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                                    <FileText className="w-6 h-6 text-white " />
                                </div>
                                <h1 className="text-3xl font-bold tracking-tight">Synapse Book</h1>
                            </div>

                            <p className="text-lg text-stone-300 mb-12 leading-relaxed">
                                A beautiful, minimal note-taking app that syncs across your devices.
                            </p>

                            <div className="space-y-4">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <p className="text-stone-300 text-sm">{benefit}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-xs text-stone-400">
                                    Trusted by thousands of users worldwide
                                </p>
                            </div>
                        </div>

                        {/* Right side - Auth form */}
                        <AuthForm/>

                        {/* Mobile Branding */}
                        <div className="md:hidden text-center">
                            <div className="flex items-center justify-center gap-2 text-white mb-3">
                                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <span className="font-bold">Notepad</span>
                            </div>
                            <p className="text-stone-300 text-sm">
                                Beautiful note-taking, made simple
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login