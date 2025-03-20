import { cn } from "@/lib/utils";

// takes a value and a className
// types of number and classname is optional and a string
const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // Ensure two decimal places
  const stringValue = value.toFixed(2);

  // Get the int/float ie 23 and 99 for $23.99
  // destructure the integer and decimal with brackets
  const [intValue, floatValue] = stringValue.split(".");

  // always want to return a class of 2xl, but optionally another class
  // use utility function in lib/utils for dunmaic classes
  return (
    <p className={cn("text-2xl", className)}>
        {/* dollar sign is smaller and up the top */}
      <span className="text-xs align-super">$</span>
      {intValue}
      {/* float is smaller and up the top */}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
