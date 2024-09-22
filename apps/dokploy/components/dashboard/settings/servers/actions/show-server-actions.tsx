import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { ShowTraefikActions } from "./show-traefik-actions";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { ShowStorageActions } from "./show-storage-actions";
import { ToggleDockerCleanup } from "./toggle-docker-cleanup";
interface Props {
	serverId: string;
}

export const ShowServerActions = ({ serverId }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<DropdownMenuItem
					className="w-full cursor-pointer "
					onSelect={(e) => e.preventDefault()}
				>
					View Actions
				</DropdownMenuItem>
			</DialogTrigger>
			<DialogContent className="sm:max-w-xl  overflow-y-auto max-h-screen ">
				<div className="flex flex-col gap-1">
					<CardTitle className="text-xl">Web server settings</CardTitle>
					<CardDescription>Reload or clean the web server.</CardDescription>
				</div>

				<div className="grid grid-cols-2 w-full gap-4">
					<ShowTraefikActions serverId={serverId} />
					<ShowStorageActions serverId={serverId} />
					<ToggleDockerCleanup serverId={serverId} />
				</div>
			</DialogContent>
		</Dialog>
	);
};