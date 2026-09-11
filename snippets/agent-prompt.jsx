export const AgentPrompt = ({ defaultLang }) => {
  const PROMPTS = {
    en: {
      label: "Copy Prompt",
      ariaLabel: "Copy the full Sintropix agent prompt",
      hint: "“Read docs.sintropix.com/llms.txt and help me use the ERP…”",
      copied: "✓ Copied — paste into your agent to get started!",
      errorTitle: "Copy failed. Select and copy the prompt below.",
      textareaLabel: "Full Sintropix agent prompt",
      text: `Help me work with the Sintropix ERP through its API.
  Use https://docs.sintropix.com/llms.txt to find documentation as needed.
  Ask me for my API key through a secure input. If I don’t have one yet, give me both options: guide me step by step through creating it at https://app.sintropix.com under Ajustes → Claves de API → Crear clave, and point me to the illustrated guide at https://docs.sintropix.com/guides/api-keys. Then wait for me to come back with the key.
  Store the key securely as SINTROPIX_API_KEY; never print or commit it.
  Confirm the API base URL, send the key in x-api-key, and use GET /api/entities to identify the company to work with.
  Only make changes I authorize, and include x-audit-actor with your agent name on every write. Ground your answers in the returned records.
  Once connected, ask me what I want to do.`,
    },
    es: {
      label: "Copiar Prompt",
      ariaLabel: "Copiar el prompt completo del agente de Sintropix en español",
      hint: "“Lee docs.sintropix.com/llms.txt y ayúdame a usar el ERP en español…”",
      copied: "✓ Copiado — pégalo en tu agente para empezar.",
      errorTitle: "No se pudo copiar. Selecciona y copia el prompt de abajo.",
      textareaLabel: "Prompt completo del agente de Sintropix en español",
      text: `Ayúdame a trabajar con el ERP de Sintropix a través de su API. Háblame siempre en español.
  Usa https://docs.sintropix.com/llms.txt para encontrar la documentación que necesites.
  Pídeme mi clave de API mediante una entrada segura. Si todavía no tengo una, dame las dos opciones: guíame paso a paso para crearla en https://app.sintropix.com en Ajustes → Claves de API → Crear clave, y muéstrame la guía ilustrada en https://docs.sintropix.com/guides/api-keys. Luego espera a que vuelva con la clave.
  Guarda la clave de forma segura como SINTROPIX_API_KEY; nunca la imprimas ni la subas a un repositorio.
  Confirma la URL base de la API, envía la clave en x-api-key y usa GET /api/entities para identificar la empresa con la que vamos a trabajar.
  Haz solo los cambios que yo autorice e incluye x-audit-actor con el nombre de tu agente en cada escritura. Basa tus respuestas en los registros devueltos.
  Una vez conectado, pregúntame qué quiero hacer.`,
    },
  };

  const Icons = () => (
      <span className="relative flex items-center justify-start shrink-0 w-[94px] h-5" aria-hidden="true">
        <svg className="w-5 h-5 motion-reduce:transform-none motion-reduce:transition-none transition-transform duration-300 ease-out -rotate-6 group-hover:-rotate-12 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.998 10.949H24v3.102h-3v3.028h-1.487V20H18v-2.921h-1.487V20H15v-2.921H9V20H7.488v-2.921H6V20H4.487v-2.921H3V14.05H0V10.95h3V5h17.998v5.949zM6 10.949h1.488V8.102H6v2.847zm10.51 0H18V8.102h-1.49v2.847z"></path>
        </svg>
        <svg className="w-5 h-5 ml-1 motion-reduce:transform-none motion-reduce:transition-none transition-transform duration-300 ease-out group-hover:-translate-x-px group-hover:-translate-y-px group-hover:rotate-6 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z"></path>
        </svg>
        <svg className="w-5 h-5 ml-1 motion-reduce:transform-none motion-reduce:transition-none transition-transform duration-300 ease-out group-hover:translate-x-px group-hover:translate-y-0.5 group-hover:-rotate-6 group-hover:scale-110" viewBox="82.65 82.65 634.71 634.71" fill="currentColor" fillRule="evenodd" xmlns="http://www.w3.org/2000/svg">
          <path d="M165.29 165.29H517.36V400H400V517.36H282.65V634.72H165.29ZM282.65 282.65V400H400V282.65Z"></path>
          <path d="M517.36 400H634.72V634.72H517.36Z"></path>
        </svg>
        <svg className="w-5 h-5 ml-0.5 motion-reduce:transform-none motion-reduce:transition-none transition-transform duration-300 ease-out rotate-6 group-hover:rotate-12 group-hover:translate-x-1" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 6H8v12h8V6zm4 16H4V2h16v20z"></path>
        </svg>
      </span>
  );

  const [status, setStatus] = useState("idle");
  // The prompt language follows the page language (English pages omit the prop).
  const lang = defaultLang in PROMPTS ? defaultLang : "en";

  useEffect(() => {
    if (status !== "copied") return;
    const timeout = setTimeout(() => setStatus("idle"), 4000);
    return () => clearTimeout(timeout);
  }, [status]);

  const active = PROMPTS[lang];

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(active.text);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="not-prose my-6" lang={lang}>
      <div className="group relative inline-flex max-w-full flex-col items-start">
        <button
          type="button"
          onClick={copyPrompt}
          aria-label={active.ariaLabel}
          className="group inline-flex cursor-pointer items-center gap-2.5 rounded-2xl border border-zinc-950 bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-zinc-200 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
        >
          <Icons />
          <span>{active.label}</span>
        </button>
        <div className="mt-3 min-h-8 text-xs leading-5" role="status">
          {status === "copied" ? (
            <span className="text-primary">{active.copied}</span>
          ) : (
            <span className="block font-mono text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none dark:text-zinc-400">
              {active.hint}
            </span>
          )}
        </div>
      </div>
      {status === "error" && (
        <div className="mt-3 text-sm" role="alert">
          <p>{active.errorTitle}</p>
          <textarea
            readOnly
            aria-label={active.textareaLabel}
            value={active.text}
            onFocus={(event) => event.target.select()}
            rows={7}
            className="mt-2 w-full rounded-lg border border-zinc-300 bg-transparent p-3 dark:border-zinc-700"
          />
        </div>
      )}
    </div>
  );
};
