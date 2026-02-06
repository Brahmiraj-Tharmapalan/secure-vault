import { Metadata } from "next"
import { FileViewer } from "@/components/dashboard/FileViewer"

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const id = (await params).id
    return {
        title: `File ${id} - SecureVault`,
        description: "View encrypted file details.",
    }
}

export default async function FilePage({
    params,
}: Props) {
    const { id } = await params

    return <FileViewer fileId={id} />
}
