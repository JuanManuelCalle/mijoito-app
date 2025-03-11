import { usePost } from '@/hooks/usePost';

export function PostTable() {
    const { data: post, isLoading, isError } = usePost();

    if (isLoading) {
        return <div className="p-4 text-center">Loading...</div>;
    }

    if (isError) {
        return <div className="p-4 text-center text-red-500">Error loading post data</div>;
    }

    if (!post) {
        return null;
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b bg-neutral-50 dark:bg-neutral-800">
                        <th className="p-4 text-left font-medium">Field</th>
                        <th className="p-4 text-left font-medium">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="p-4 font-medium">ID</td>
                        <td className="p-4">{post.id}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-4 font-medium">Title</td>
                        <td className="p-4">{post.title}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-4 font-medium">Body</td>
                        <td className="p-4">{post.body}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-4 font-medium">User ID</td>
                        <td className="p-4">{post.userId}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}