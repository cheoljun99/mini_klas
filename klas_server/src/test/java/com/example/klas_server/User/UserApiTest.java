package com.example.klas_server.User;

import com.example.klas_server.ApiTest;
import io.restassured.RestAssured;
import io.restassured.response.ExtractableResponse;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class UserApiTest extends ApiTest {
    @Test
    void SignUp() {
        final SignUpUserRequest req = getSignUpUserRequest();
        final ExtractableResponse<Response> response = SignUpRequest(req);

        assertThat(response.statusCode()).isEqualTo(HttpStatus.CREATED.value());
    }

    private static ExtractableResponse<Response> SignUpRequest(SignUpUserRequest req) {
        return RestAssured.given().log().all()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .body(req)
                .when()
                .post("/users")
                .then()
                .log().all().extract();
    }

    private static SignUpUserRequest getSignUpUserRequest() {
        final String name = "이연걸";
        final Integer userId = 2018202076;
        final String password = "password";
        final UserType userType = UserType.STUDENT;

        return new SignUpUserRequest(name, userId, password, userType);
    }
}