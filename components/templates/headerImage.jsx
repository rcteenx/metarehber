import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const imageStyles = cva(
  "mx-auto h-48 max-w-xl relative bg-no-repeat bg-center md:rounded-2xl md:border-4 md:border-white ",
  {
    variants: {
      bgImage: {
        default: "bg-rMerhaba",
        rMerhaba: "bg-rMerhaba",
        fMerhaba: "bg-fMerhaba",
        yMerhaba: "bg-yMerhaba",
        cMerhaba: "bg-cMerhaba",
        aMerhaba: "bg-aMerhaba",
        iMerhaba: "bg-iMerhaba",
      },
    },
    defaultVariants: {
      bgImage: "default",
    },
  }
);
const h1Styles = cva("absolute -bottom-4 left-8 font-light ", {
  variants: {
    h1Color: {
      default: "text-white",
      black: "text-black",
      gray800: "text-gray-800",
      gray400: "text-gray-400",
    },
  },
  defaultVariants: {
    h1Color: "default",
  },
});

export default function HeaderTitle({ bgImage, h1Color, children, ...props }) {
  return (
    <section className="md:p-4 sm:gradientWhiteToprimary shadow-lg border-b-4 border-primary-light-3 -z-10">
      <div className={cn(imageStyles({ bgImage }))}>
        <h1 className={cn(h1Styles({ h1Color }))}>{children}</h1>
      </div>
    </section>
  );
}
