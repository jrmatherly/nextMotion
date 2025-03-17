import { Logo } from '~/components/ui/logo';
import { title } from '../data';

export function Title() {
  function parseForHighlightedWords(text: string) {
    const wordsAndSpaces = text.split(/(\s+)/);

    return wordsAndSpaces.map((chunk, index) => {
      const isHighlighted = title.highlight
        .map(word => word.toLowerCase())
        .includes(chunk.trim().toLowerCase());

      // Create a stable key based on the content and position
      const stableKey = `word-${chunk.trim() || 'space'}-${index}`;

      return (
        <span
          key={stableKey}
          className={`${isHighlighted ? 'text-white drop-shadow-[0px_0px_3px_white]' : ''}`}
        >
          {chunk}
        </span>
      );
    });
  }
  return (
    <div className="w-full grow basis-1">
      {/* Use cool glowy text */}
      {/* <h1 className="text-nowrap text-center text-48-96 font-bold">
        {title.plainText}
        <GlowText text={title.glowText} />
      </h1> */}

      {/* Or use a logo */}
      <div className="flex flex-col items-center justify-center gap-2">
        <Logo className="h-[100px] w-[100px] md:h-[150px] md:w-[150px]" />
        <h1 className="text-nowrap text-center text-48-96 font-bold">
          {title.plainText}
          {title.glowText}
        </h1>
        <h2 className="text-center text-18-24 font-light text-muted-foreground">
          {parseForHighlightedWords(title.subTitle)}
        </h2>
      </div>
    </div>
  );
}
