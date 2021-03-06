import React, { useState, useEffect } from "react";
import util from "../../utils/util";
import ReactMoment from "react-moment";
import "moment-timezone";
import moment from "moment";
import { columns } from "./EventList";
import { gql, useQuery, useMutation } from "@apollo/client";

const EventTable = ({
  form,
  setForm,
  _save,
  openEditor,
  setOpenEditor,
  pageRouter,
  user,
}) => {
  return (
    <>
      <div>
        <p>Please enter basic information for the event.</p>
        <div>
          <label>Event Name</label>
          <input
            type="text"
            name="name"
            value={form["name"]}
            onChange={(e) => {
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <label>Event Code</label>
          <input
            type="text"
            name="code"
            value={form["code"]}
            onChange={(e) => {
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="date"
            name="start_date"
            value={moment(form["start_date"]).format("YYYY-MM-DD")}
            onChange={(e) => {
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <label>Event Code</label>
          <input
            type="date"
            name="end_date"
            value={moment(form["end_date"]).format("YYYY-MM-DD")}
            onChange={(e) => {
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Event Domain</label>
          <input
            type="url"
            name="domain"
            value={form["domain"]}
            onChange={(e) => {
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>Time Zone</label>
          <select>
            <option value="">GMT +09 KOREA</option>
          </select>
        </div>
        <div>
          <label>Registration</label>
          <select>
            <option value="">Free(no login)</option>
            <option value="">Free(with login)</option>
            <option value="">Ticketed</option>
          </select>
        </div>
        <div>
          <label>???????????? ?????? ?????????</label>
          <textarea
            name="domain"
            value={form["domain"]}
            onChange={(e) => {
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label>????????? ?????? ?????????</label>
          <textarea />
        </div>
      </div>
      {/* category */}
      <div>
        <p>
          Event Category <span>???????????? ????????? ????????? ???????????????</span>
        </p>
        <table>
          <thead>
            <tr>
              <th>????????????</th>
              <th>??????</th>
              <th>????????????</th>
              <th>??????</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>???????????? Conference</th>
              <td>??????</td>
              <td>????????????</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <th>????????? Workshop</th>
              <td>??????</td>
              <td>????????????</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <th>????????? Exhibition</th>
              <td>??????</td>
              <td>????????????</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <th>?????? ????????? Theater</th>
              <td>??????</td>
              <td>????????????</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <th>????????? Seoul Booth</th>
              <td>??????</td>
              <td>????????????</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <th>????????? Lounge</th>
              <td>??????</td>
              <td>????????????</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <th>????????? ?????? Play Ground</th>
              <td>??????</td>
              <td>????????????</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventTable;
