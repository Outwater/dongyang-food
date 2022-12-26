import Text from "client/components/common/Text";
import Layout from "client/components/layout/Shop";

const NotFoundPage = ({}) => {
  return (
    <Layout>
      <Text size={36} bold={600} full center>
        존재하지 않는 페이지 입니다.
      </Text>
    </Layout>
  );
};

export default NotFoundPage;
