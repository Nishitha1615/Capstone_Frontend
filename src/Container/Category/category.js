import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory ,addcategory } from "../../actions/category.action";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Input from "../../Components/UI/Input";

const Category = (props) => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  // const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const [show, setShow] = useState(false);
  const [name, setNmae] = useState("");
  const [parentCategoryId, setparentCategoryId] = useState("");
  const [imageCategory, setImageCategory] = useState("");
  const handleClose = () =>{
    const form=new FormData();
    
    form.append('name', name);
    form.append('parentId',parentCategoryId);
    form.append('ImageCategory',imageCategory)
    dispatch(addcategory(form))
    
    // const cat={
    //   name,
    //   parentCategoryId,
    //   imageCategory
    // }
    // console.log(cat)
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const renderCategories = (categories) => {
    let listcategories = [];
    for (let category of categories) {
      listcategories.push(
        <li key={category.name}>
          {category.name}
          {category.child.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }

    return listcategories;
  };

  const createCategorylist = (categories, options=[]) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.child.length > 0) {
        createCategorylist(category.child, options);
      }
    }
    return options;
  };

  const handelCategoryImage=(e)=>{
    setImageCategory(e.target.files[0]);
  }

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>hii helloo</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <ul>{renderCategories(category.categories)}
            {/* {JSON.stringify(createCategorylist(category.categories))} */}
            </ul>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Category Name</label>
          <Input>
            value={name}
            placeholder={"category name"}
            onChange={(e) => setNmae(e.target.value)}
          </Input>

          <select className="form-control" value={parentCategoryId} onChange={(e)=>setparentCategoryId(e.target.value)}>
            <option>select category</option>
            {
              createCategorylist(category.categories).map(option=>
              <option value={option.value} key={option.value}>{option.name}</option>)
            }
          </select>

          <input type="file" name="categoryImage" onChange={handelCategoryImage}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default Category;
