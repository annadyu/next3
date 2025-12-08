"use client";

import { Card, Row, Col, Flex } from "antd";
import truncate from "@/utils/truncate";
import formatDate from "@/utils/formatDate";

const { Meta } = Card;

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date?: string;
  poster_path?: string;
}

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
   <div style={{display:"flex",
    alignItems:"center",
    justifyContent:"center"
   }}>
     <Row gutter={[16, 16]}
    style={{
      width:"1000px"
    }}>
      {movies.map((movie) => (
        <Col key={movie.id} span={12}>
          <Card
            style={{
              display: "flex",
              width: "451px",
              height: "285px",
            }}
            hoverable
            cover={
              movie.poster_path ? (
                <img
                  style={{
                    width: "181px",
                    height: "281px",
                  }}
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                />
              ) : (
                <div
                  style={{
                    width: "181px",
                    height: "281px",
                    backgroundColor: "#eee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  No image
                </div>
              )
            }
          >
            <div
              style={{
                width: "173px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  marginBottom: "7px",
                }}
              >
                {movie.title}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#827E7E",
                }}
              >
                {" "}
                {formatDate(movie.release_date)}
              </span>
            <div style={{display:"flex",
              marginBottom:"7px",
              marginTop:"7px"
            }}>
                <span
                style={{
                  color: "##000000A6",
                  width: "46px",
                  border: "1px solid #D9D9D9",
                  padding: "2px 2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight:"8px"
                }}
              >
                Action
              </span>
              <span
                style={{
                  color: "##000000A6",
                  width: "46px",
                  backgroundColor:"#FAFAFA",
                  border: "1px solid #D9D9D9",
                  padding: "2px 2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Drama
              </span>
            </div>
              <span style={{color:"#000000",
                fontSize:"12px"
              }}> {truncate(movie.overview, 120)}</span>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
   </div>
  );
}
