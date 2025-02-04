import {FC} from "react";
import {Metadata} from "next";

type Props ={
    params: {id: string}
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'Comment Page Title' + id,
    }
}

const CommentPage: FC<Props> = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            Comment Page Content {id}
        </div>
    );
};

export default CommentPage;
