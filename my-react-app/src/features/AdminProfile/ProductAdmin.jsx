import { useNavigate } from "react-router";
import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { useGetProductsQuery } from "../product/prouctApi";
import { base } from "../../Data/port";
const ProductAdmin = () => {

  const { data, error, isLoading } = useGetProductsQuery();
  console.log(data);


  const nav = useNavigate();
  const TABLE_HEAD = ["", "Title", "CreatedAt",
    "Edit", "Delete"];

  if (isLoading) {
    return <h1>Loading....</h1>
  }
  console.log(data);
  return (
    <div className="p-5">
      <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Welcome To Shops</h1>
        <Button onClick={() => nav('/add-product')} className="py-2 px-4" color="purple-600" size="lg">Add Product</Button>
      </div>
      {<Card className="max-w-3xl">
        <table className=" table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.product.map(({ title, image, createdAt, _id }, index) => {
              const isLast = index === data.product.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Avatar src={`${base}/${image}`} alt="avatar" />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {title}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {createdAt}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Button onClick={() => nav(`/edit-product/${_id}`)}
                      className="bg-green-700" size="sm">Edit</Button>
                  </td>
                  <td className={classes}>
                    <Button color="orange" size="sm" >Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>



        </table>
      </Card>}
    </div>
  )
}
export default ProductAdmin
