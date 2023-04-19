import { Button } from 'components/Button/Button';
import { Formik } from 'formik';
import {
  Input,
  EmailIcon,
  NameInput,
  WrapperForm,
  FormSubscribe,
  Title,
  Text,
} from './SubscribeForm.styled';
import { AddSvg } from 'components/AddSvg/AddSvg';
import { useMedia } from 'hooks';
import { updateSubscribe } from 'api/serviseApi';
import { useSelector } from 'react-redux';
import FormError from 'components/FormError/FormError';
import * as yup from 'yup';

const schema = yup.object().shape({
  subscribe: yup.string().min(4).email(),
});

const SubscribeForm = () => {
  const { screenType } = useMedia();

  const userEmail = useSelector(state => state.auth.user.email);

  const handleSubmit = async (values, { resetForm }) => {
    const { subscribe } = values;
    if (userEmail !== subscribe) {
      return;
    }
    await updateSubscribe();
    resetForm();
  };

  return (
    <WrapperForm>
      {screenType === 'desktop' ? (
        <>
          <Title>Subscribe to our Newsletter</Title>
          <Text>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </Text>
        </>
      ) : null}
      <Formik
        initialValues={{ subscribe: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          return (
            <FormSubscribe>
              <NameInput>
                <EmailIcon>
                  <AddSvg
                    name="email"
                    width="16px"
                    height="12px"
                    widthTable="20px"
                    heightTablet="16px"
                    widthDesktop="20px"
                    heightDesktop="16px"
                  />
                </EmailIcon>

                <Input
                  state={errors.subscribe ? 'error' : 'undefined'}
                  type="email"
                  name="subscribe"
                  placeholder="Enter your current email"
                />
                <FormError name="subscribe" />
              </NameInput>
              <Button
                type="submit"
                look="subscribe"
                width="204px"
                heigth="38px"
                widthTablet="171px"
                heigthTablet="50px"
                widthDesktop="339px"
                heigthDesktop="60px"
                fontSize="14px"
                fontSizeTablet="16px"
                fontSizeDesktop="16px"
                lineHeight="16px"
                lineHeightTablet="18px"
                lineHeightDesktop="18px"
              >
                Subcribe
              </Button>
            </FormSubscribe>
          );
        }}
      </Formik>
    </WrapperForm>
  );
};

export default SubscribeForm;
