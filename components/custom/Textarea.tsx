import { Textarea as TArea } from "@/components/ui/textarea";
export default function Textarea() {
  return (
    <TArea
      className="max-w-sm text-base"
      name="message"
      placeholder="Enter your message here. &#128515; "
      rows={5}
    />
  );
}
