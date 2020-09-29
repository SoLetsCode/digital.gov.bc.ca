import React from 'react';
import SimpleBanner from '../PageElements/BannerSimple/bannerSimple';
import ProductsInstructions from './productsinstructions';
import Defining from './defining';
import Considering from './considering';
import Assembling from './assembling';

import '../../css/products.css';

import { PageContainer } from '../StyleComponents/pageContent';
import { ProductPageSubtitle } from '../StyleComponents/headings';
const Products = () => {
  return (
    <PageContainer>
      <SimpleBanner
        title="Products and Services"
        description="Supports to help you create or improve a digital service."
      />
      <div className="productsBody">
        <ProductsInstructions />
        <div>
          <ProductPageSubtitle>
            Here are some services to help you along this journey:
          </ProductPageSubtitle>
        </div>
        <Defining />
        <Considering />
        <Assembling />
      </div>
    </PageContainer>
  );
};

export default Products;
