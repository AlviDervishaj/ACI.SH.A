import { Input } from "../ui/input";

interface OrderUserInformationProps {
  userData: { name: string; email: string; address: string };
  setUserData: (data: { name: string; email: string; address: string }) => void;
}
export const OrderUserInformation = ({
  userData,
  setUserData,
}: OrderUserInformationProps) => {
  return (
    <div className="w-11/12 pt-4 mx-auto">
      <div className="flex flex-col gap-3">
        <Input
          placeholder="Name"
          type="text"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <Input
          placeholder="Address"
          type="text"
          value={userData.address}
          onChange={(e) =>
            setUserData({ ...userData, address: e.target.value })
          }
        />
      </div>
    </div>
  );
};
