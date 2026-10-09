import { Link } from "react-router-dom";

import viLogo from "../public/VideDashboardGreenLogo.png";

const Footer = () => {
    return (
        <footer className="bg-[var(--color-background)]  sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">













                <div className="flex   flex-col gap-12 pb-12 lg:flex-row lg:items-start lg:justify-between">


                    <div className="lg:max-w-sm pt-12">
                        <div className="flex items-center justify-start px-1 pt-4 ">
                            <img
                                src={viLogo}
                                alt="VI logo"
                                className="h-32 w-32 object-contain  "
                            />
                        </div>

                        <p className="mt-5 max-w-xs font-[var(--font-secondary)] px-6  text-sm leading-6 text-[var(--color-muted)]">
                            Your AI study companion — explain anything at your level, make
                            flashcards, and stay accountable.
                        </p>
                    </div>


                    <div className=" grid grid-cols-1 gap-10  sm:grid-cols-3 sm:pt-0  lg:gap-20 px-6 lg:pt-24">


                        <div>
                            <h3 className="font-[var(--font-secondary)] text-sm font-semibold text-[var(--color-text-dark)]">
                                Product
                            </h3>

                            <ul className="mt-5 space-y-3 font-[var(--font-secondary)] text-sm text-[var(--color-muted)]">
                                <li>
                                    <a
                                        href="#features"
                                        className="transition hover:text-[var(--color-primary)]">
                                        Features
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-[var(--color-primary)]" >
                                        Study Modes
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#about"
                                        className="transition hover:text-[var(--color-primary)]">
                                        About Us
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="font-[var(--font-secondary)] text-sm font-semibold text-[var(--color-text-dark)]">
                                Company
                            </h3>

                            <ul className="mt-5 space-y-3 font-[var(--font-secondary)] text-sm text-[var(--color-muted)]">
                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-[var(--color-primary)]">
                                        Our Story
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="transition hover:text-[var(--color-primary)]">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="font-[var(--font-secondary)] text-sm font-semibold text-[var(--color-text-dark)]">
                                Legal
                            </h3>

                            <ul className="mt-5 space-y-3 font-[var(--font-secondary)] text-sm text-[var(--color-muted)]">
                                <li>
                                    <Link
                                        to="/terms"
                                        className="transition hover:text-[var(--color-primary)]" >
                                        Terms and Conditions
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/privacy"
                                        className="transition hover:text-[var(--color-primary)]" >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>



                <div className="border-t border-black/10 py-6">
                    <p className="text-center font-[var(--font-secondary)] text-sm text-[var(--color-muted)]">
                        © {new Date().getFullYear()} Vide — Developed by{' '}
                        <a
                            href="https://shobby-digital.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold transition hover:underline"
                        >
                            Shobby Digital
                        </a>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;