import { groups } from "@prisma/client";

export interface group extends Omit<groups, "id"> {
}
