import Reveal from "@/components/Reveal";

type SimpleItem = string;
type RichItem = { title: string; description: string };

type EditorialListProps = {
  items: SimpleItem[] | RichItem[];
};

function isRichItem(item: SimpleItem | RichItem): item is RichItem {
  return typeof item === "object";
}

/**
 * Liste éditoriale asymétrique : chaque entrée occupe sa propre ligne,
 * numérotée en or, avec un décalage horizontal alterné (gauche/droite)
 * pour éviter tout effet de grille ou de tableau.
 */
export default function EditorialList({ items }: EditorialListProps) {
  return (
    <div className="divide-y divide-line border-t border-line">
      {items.map((item, index) => {
        const offset = index % 3;
        const indentClass =
          offset === 1 ? "sm:ml-12" : offset === 2 ? "sm:ml-24" : "";
        const num = String(index + 1).padStart(2, "0");

        return (
          <Reveal key={isRichItem(item) ? item.title : item} delay={index * 60}>
            <div className={`group flex gap-6 py-8 transition-colors duration-300 hover:bg-accent-soft/40 ${indentClass}`}>
              <span className="num-hover font-serif text-sm text-gold">{num}</span>
              {isRichItem(item) ? (
                <div>
                  <h3 className="title-hover font-serif text-xl text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                </div>
              ) : (
                <p className="max-w-xl text-base leading-relaxed text-foreground transition-colors duration-300 group-hover:text-pine">
                  {item}
                </p>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
