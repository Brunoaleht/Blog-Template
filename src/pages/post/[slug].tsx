import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loadPost } from '../../api/loadPost';
import { PostsTemplateProps } from '../../templates/PostsTemplate';
import { PostTemplate } from '../../templates/PostTemplate';

export default function PostPage({ posts, setting }: PostsTemplateProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <Head>
        <title>
          {posts.postData[0].attributes.title} - {setting.settingData.attributes.blogName}
        </title>
        <meta name="description" content={posts.postData[0].attributes.excerpt} />
      </Head>
      <PostTemplate post={posts.postData[0]} setting={setting} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: PostsTemplateProps | null = null;
  let paths = [];
  try {
    data = await loadPost();
    paths = data.posts.postData.map((post) => ({ params: { slug: post.attributes.slug } }));
  } catch (e) {
    data = null;
  }
  if (!data || !data.posts.postData || !data.posts.postData.length) {
    paths = [];
  }
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async (ctx) => {
  let data = null;

  try {
    data = await loadPost({ slug: { eq: ctx.params.slug as string } });
  } catch (e) {
    data = null;
  }
  if (!data || !data.posts.postData || !data.posts.postData.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: data.posts,
      setting: data.setting,
    },
    revalidate: 24 * 60 * 60,
  };
};
