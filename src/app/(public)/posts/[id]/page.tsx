import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: {id: string}
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: "Post Page Title" + id,
    }
}

const PostPage: FC<Props> = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            Post Page Content {id}
        </div>
    );
};

export default PostPage;
