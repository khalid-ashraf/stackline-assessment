import React, { FC, memo } from 'react';
import { connect } from 'react-redux';
import Styles from '../styles';

const {
  leftbar_container,
  img,
  h2,
  subTitle,
  tagSection,
  tags_children,
} = Styles;

interface ProductProps {
  image: string;
  title: String;
  subtitle: String;
  tags: string[];
}

const LeftBar: FC<ProductProps> = ({ image, title, subtitle, tags }) => {
  return (
    <div style={leftbar_container}>
      <img src={image} alt={image} style={img} />
      <h2 style={h2}>{title}</h2>
      <span style={subTitle}>{subtitle}</span>
      <div style={tagSection}>
        {tags &&
          tags.map((item) => {
            return (
              <li key={item} style={tags_children}>
                {item}
              </li>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ salesReducer }) => {
  return salesReducer.data[0] || {};
};

export default connect(mapStateToProps, null)(memo(LeftBar));
