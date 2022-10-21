import styled from 'styled-components';

export const PostsTableWrapper = styled.section`
    width: 786px;
    margin: 0 auto;
`;

export const PostsTableHeading = styled.h2`
    text-align: left;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    font-family: 'Bitter';
    font-style: normal;
    margin-top: 30px;
    margin-bottom: 12px;
`;

export const PostsTable = styled.table`
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid #DDD;
    font-size: 14px;
    text-align: left;
`;

export const PostsTableRow = styled.tr`
    border: 1px solid #DDD;
    height: 35px;
    &:nth-child(1) {
        width: 50%;
    }
    &:nth-child(2) {
        width: 14.5%;
    }
    &:nth-child(3) {
        width: 7.5%;
    }
    &:nth-child(4) {
        width: 12.5%;
    }
    &:nth-child(5) {
        width: 16.4%;
    }
`;

export const PostTableHeaderCell = styled.th`
    border: 1px solid #DDD;
    font-weight: 500;
    color: #000000;
    padding-left: 12px;
    vertical-align: middle;
    &:nth-child(1) {
        width: 50%;
    }
    &:nth-child(2) {
        width: 14.5%;
    }
    &:nth-child(3) {
        width: 7.5%;
    }
    &:nth-child(4) {
        width: 12.5%;
    }
    &:nth-child(5) {
        width: 16.4%;
    }
`;

export const PostsTableCell = styled.td`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border: 1px solid #DDD;
    padding-left: 12px;
    padding-right: 12px;
    vertical-align: middle;
`;
