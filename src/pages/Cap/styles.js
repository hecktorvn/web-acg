import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    #table_caps{
        background: #fff;
        border-radius: 3px;
        box-shadow: 2px 2px 10px 1px #0000000d;
        border: 2px solid #0000002e;
        box-sizing: border-box;
        min-width: 50%;

        #buttons{
            padding: 5px;
        }

        .bg-danger{
            background-color: #de504a;
            color: #fff;
        }

        button{
            height: auto;
            width: auto;
            box-sizing: border-box;
            padding: 5px 10px;
            border-radius: 3px;
            margin-right: 5px;
            cursor: pointer;

            &:hover{
                opacity: 0.8;
                transform: scale(1.05);
                transition: 0.3s;
            }

            &:active{
                transform: scale(0.95);
                transition: 0.3s;
            }
        }
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;

        tbody tr{
            td {
                padding: 5px;
                &:not(:last-of-type){
                    border-right: 1px solid #e0e0e0;
                }
            }

            &:nth-of-type(odd){
                background-color: #00000008;
                border: 1px solid #00000021;
                border-left-width: 0;
                border-right-width: 0;

                &:first-of-type{
                    border-top-width: 0;
                }
            }

            &:hover{
                background-color: #2196f326;
            }
        }

        thead th {
            padding: 5px;
            border: 1px solid #0000001f;
            border-top-width: 0;
            border-left-width: 0;

            &:last-of-type{
                border-right-width: 0;
            }
        }

        tfoot tr td {
            padding: 5px;
            color: #fff;

            &:not(:last-of-type){
                border-right: 1px solid #ffffff2b;
            }
        }

        tfoot tr {
            background: #383535;
        }
    }
`;