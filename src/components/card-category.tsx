import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const CardCategory = ({
  title,
  summary,
  date,
}: {
  title: string;
  summary: string;
  date: string;
}) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{summary}</p>
      </CardContent>
      <CardFooter>
        <p>{date}</p>
      </CardFooter>
    </Card>
  );
};

export default CardCategory;
